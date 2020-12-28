import { Component, OnInit } from '@angular/core';
import { NbDialogModule, NbDialogService } from '@nebular/theme';
import { Observable, Subscription, timer } from 'rxjs';
import { MLService } from 'src/app/services/ml.service';
import { StartTrainDialogComponent } from './dialogs/start-train-dialog/start-train-dialog.component';

@Component({
  selector: 'app-models-training',
  templateUrl: './models-training.component.html',
  styleUrls: ['./models-training.component.scss']
})
export class ModelsTrainingComponent implements OnInit {

  constructor(private ml: MLService, private dialog: NbDialogService) { }

  models = [];
  selectedModel = "";
  trains = [];
  trainsInfo = [];
  trainsSubscription: Subscription = null;

  ngOnInit(): void {
    this.ml.getModels().then((data) => {
      this.models = data['models'];
    });
    timer(0, 1000).subscribe(() => {
      for (let i = 0; i < this.trainsInfo.length; i++) {
        this.trainsInfo[i]['elapsed_time'] = (Date.now() - this.trainsInfo[i]['status']['start_at']);
      }
    });
  }

  getTrainInfo(train) {
    for (let i = 0; i < this.trainsInfo.length; i++) {
      if (this.trainsInfo[i]['train'] == train) {
        return this.trainsInfo[i];
      }
    }
    return {};
  }

  getHMS(timestamp) {
    timestamp = Math.round(timestamp);
    let mins = Math.floor(timestamp / 60);
    mins %= 60;
    let hours = Math.floor(timestamp / 3600);
    return `${hours}h${mins}m${timestamp % 60}`
  }

  onSelectModel(model) {
    this.selectedModel = model;
    this.ml.getTrains(model).then((data) => {
      console.log(data);
      this.trains.length = 0;
      this.trains = data['trains'];
      console.log(this.trains);
    });
    if (this.trainsSubscription) {
      this.trainsSubscription.unsubscribe();
    }
    this.trainsSubscription = this.ml.getTrainList(this.selectedModel).subscribe((data) => {
      this.trainsInfo.length = 0;
      for (let i = 0; i < data.length; i++) {
        this.trainsInfo.push({ train: data[i].payload.doc.id, status: data[i].payload.doc.data() });
      }
      console.log(this.trainsInfo);
    });
  }

  onOpenCreateNewTrainingDialog() {
    console.log(this.selectedModel);
    this.dialog.open(StartTrainDialogComponent, { context: { modelName: this.selectedModel } });
  }

  clickStartTrain(train) {
    this.ml.startTrain(this.selectedModel, train).then(() => {

    })
  }

  isTraining(train) {
    for (let i = 0; i < this.trainsInfo.length; i++) {
      if (this.trainsInfo[i]['train'] == train) {
        return true;
      }
    }
    return false;
  }

}
