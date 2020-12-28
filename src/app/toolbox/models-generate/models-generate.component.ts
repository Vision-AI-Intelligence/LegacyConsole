import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { timer } from 'rxjs';
import { JobService } from 'src/app/services/job.service';
import { MLService } from 'src/app/services/ml.service';
import { CreateModelComponent } from './dialogs/create-model/create-model.component';

@Component({
  selector: 'app-models-generate',
  templateUrl: './models-generate.component.html',
  styleUrls: ['./models-generate.component.scss']
})
export class ModelsGenerateComponent implements OnInit {

  constructor(private dialog: NbDialogService, private toast: NbToastrService, private job: JobService, private ml: MLService) { }

  downloadingModelIds = [];
  downloadingModels = [];
  models = [];

  ngOnInit(): void {
    this.job.getJobsStream("ml").subscribe(async (jobs) => {
      this.downloadingModelIds.length = 0;
      for (let i = 0; i < jobs.length; i++) {
        let currentJob = jobs[i].payload.doc.data();
        if (currentJob['type'] == "download-model") {
          this.downloadingModelIds.push(currentJob);
        }
      }
      this.loadModels();
    });
    timer(0, 5000).subscribe(() => {
      //this.loadDownloadingModels();
    });

  }

  async loadDownloadingModels() {
    this.downloadingModels.length = 0;
    for (let i = 0; i < this.downloadingModelIds.length; i++) {
      let currentJob = this.downloadingModelIds[i];
      let modelInfo = await this.job.getJobInfo(currentJob.id);
      this.downloadingModels.push({ ...currentJob, ...modelInfo });
      console.log(modelInfo);
      if (modelInfo['state'].status == undefined || modelInfo['state'].status == "done") {
        this.job.removeJob(this.downloadingModels[i].id, "ml");
      }
    }
  }

  isDownloadingModel(model) {
    for (let i = 0; i < this.downloadingModels.length; i++) {
      if (this.downloadingModels[i].model_name == model) {
        return true;
      }
    }
    return false;
  }

  getColorStatus(i) {
    if (this.downloadingModels[i].state.status == undefined) {
      return "basic";
    }
    if (this.downloadingModels[i].state.status == "start") {
      return "success";
    }
    else if (this.downloadingModels[i].state.status == "error") {
      return "danger";
    }
    else {
      this.job.removeJob(this.downloadingModels[i].id, "ml");
    }
    return "basic";
  }

  getPercent(i) {
    const currentJob = this.downloadingModels[i];
    console.log(currentJob);
    if (currentJob.state.info == undefined) {
      return 0;
    }
    if (currentJob.state.info.includes("Download:")) {
      return currentJob.state.downloaded_size / currentJob.state.total_size * 100;
    }
    return 0;
  }

  loadModels() {
    this.ml.getModels().then((models) => {
      console.log(models);
      this.models = models['models'];
    }).catch((err) => { this.toast.danger(err.error.message, "Cannot get models"); });
  }

  openCreateModelDialog() {
    this.dialog.open(CreateModelComponent);
  }

}
