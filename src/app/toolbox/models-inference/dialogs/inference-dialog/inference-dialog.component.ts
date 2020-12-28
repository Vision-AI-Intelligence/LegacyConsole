import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NbDialogRef, NbToastrService } from '@nebular/theme';
import { MLService } from 'src/app/services/ml.service';

@Component({
  templateUrl: './inference-dialog.component.html',
  styleUrls: ['./inference-dialog.component.scss']
})
export class InferenceDialogComponent implements OnInit {

  constructor(private ml: MLService, private toast: NbToastrService, private dialog: NbDialogRef<InferenceDialogComponent>) { }

  labelMapDirControl = new FormControl();
  inputDirControl = new FormControl();
  outputDirControl = new FormControl();

  model = "";
  train = "";

  ngOnInit(): void {
  }

  startInfer() {
    this.ml.infer(this.model, this.train, this.labelMapDirControl.value, this.inputDirControl.value, this.outputDirControl.value)
      .then(() => {
        this.toast.success("Inference is running, please wait!", "Success");
        this.dialog.close();
      })
      .catch((err) => {
        this.toast.danger(err.error.message, "Cannot start inference");
      })
  }

}
