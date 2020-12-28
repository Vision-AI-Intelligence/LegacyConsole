import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { NbDialogService } from '@nebular/theme';
import { AuthService } from 'src/app/services/auth.service';
import { BucketService } from 'src/app/services/bucket.service';
import { MLService } from 'src/app/services/ml.service';
import { ProjectService } from 'src/app/services/project.service';
import { environment } from 'src/environments/environment';
import { InferenceDialogComponent } from './dialogs/inference-dialog/inference-dialog.component';

@Component({
  selector: 'app-models-inference',
  templateUrl: './models-inference.component.html',
  styleUrls: ['./models-inference.component.scss']
})
export class ModelsInferenceComponent implements OnInit {

  constructor(private ml: MLService, private project: ProjectService, private auth: AuthService, private dialog: NbDialogService, private bucket: BucketService, private santizer: DomSanitizer) { }

  ngOnInit(): void {
    this.ml.getModels().then((data) => {
      this.models = data['models'];
    });
  }

  models = [];
  trains = [];
  selectedModel = "";
  selectedTrain = "";

  previewFiles = [];
  previewCurrentIndex = 0;

  outputDirControl = new FormControl();

  previewImage = null;

  onSelectModel(model) {
    this.selectedModel = model;
    this.ml.getTrains(model).then((data) => {
      this.trains = data['trains'];
    });
  }

  onSelectTrain(train) {
    this.selectedTrain = train;
  }

  onOpenInferDialog() {
    this.dialog.open(InferenceDialogComponent, { context: { model: this.selectedModel, train: this.selectedTrain } });
  }

  async onLoadPreview() {
    let data = await this.bucket.walk('data/' + this.outputDirControl.value);
    this.previewFiles = data['files'];
    this.previewCurrentIndex = 0;
  }

  hexToBase64(str) {
    return btoa(String.fromCharCode.apply(null, str.replace(/\r|\n/g, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" ")));
  }

  async goBackPreview() {
    if (this.previewCurrentIndex == 0) {
      this.previewCurrentIndex = this.previewFiles.length - 1;
      return;
    }
    this.previewCurrentIndex--;
    this.getImageLink();
  }

  async goForwardPreview() {
    if (this.previewCurrentIndex == this.previewFiles.length - 1) {
      this.previewCurrentIndex = 0;
      return;
    }
    this.previewCurrentIndex++;
    this.getImageLink();
  }

  async getImage() {
    try {
      let data = await this.bucket.downloadFile(this.outputDirControl.value + "/" + this.previewFiles[this.previewCurrentIndex]);
      //console.log(data);
      return data;
    }
    catch (err) {
      //console.log(err.error.text);
      return err.error.text;
      //console.log(err.error.text);
    }
  }

  getImageLink() {
    let prj = this.project.getSelectedProject();
    let filename = this.outputDirControl.value + "/" + this.previewFiles[this.previewCurrentIndex];
    this.previewImage = `${environment.gateway}/v1/bucket/runner/download?token=${this.auth.getIdToken()}&pid=${prj.id}&dir=${filename}`;
  }

}
