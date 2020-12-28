import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NbDialogRef, NbToastrService } from '@nebular/theme';
import { MLService } from 'src/app/services/ml.service';

@Component({
  templateUrl: './start-train-dialog.component.html',
  styleUrls: ['./start-train-dialog.component.scss']
})
export class StartTrainDialogComponent implements OnInit {

  constructor(private ml: MLService, private toast: NbToastrService, private dialog: NbDialogRef<StartTrainDialogComponent>) { }

  trainControl = new FormControl();
  modelName = "";
  configPipeline = "";

  ngOnInit(): void {
    this.ml.getConfig(this.modelName).then((data) => {
      this.configPipeline = data['config'];
    })
  }

  async createTrain() {
    if (this.trainControl.value == "") {
      this.toast.danger("Require train name", "Cannot create new training");
      return;
    }
    try {
      await this.ml.createTrain(this.modelName, this.trainControl.value);
      await this.ml.createConfig(this.modelName, this.trainControl.value, this.configPipeline);
      this.dialog.close();
    }
    catch (err) {
      this.toast.danger(err.error.message, "Cannot create new training");
    }
  }

}
