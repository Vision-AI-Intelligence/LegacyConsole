import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import { ProjectService } from './project.service';

@Injectable({
  providedIn: 'root'
})
export class MLService {

  constructor(private auth: AuthService, private project: ProjectService, private httpClient: HttpClient, private db: AngularFirestore) { }

  public generateTFRecord(path_to_annotation, path_to_images, path_to_label_map, path_to_tfrecord) {
    const prj = this.project.getSelectedProject();
    return this.httpClient.post(`${environment.gateway}/v1/ml/gen_tfrecord?pid=${prj.id}`, {
      path_to_annotation: path_to_annotation,
      path_to_images: path_to_images,
      path_to_label_map: path_to_label_map,
      path_to_tfrecord: path_to_tfrecord
    }, {
      headers: {
        Authorization: this.auth.getIdToken()
      }
    }).toPromise();
  }

  public getModels() {
    const prj = this.project.getSelectedProject();
    return this.httpClient.get(`${environment.gateway}/v1/ml/models?pid=${prj.id}`, {
      headers: {
        Authorization: this.auth.getIdToken()
      }
    }).toPromise();
  }

  public createModel(url, modelName) {
    const prj = this.project.getSelectedProject();
    return this.httpClient.post(`${environment.gateway}/v1/ml/download_pretrained_model?pid=${prj.id}`, {
      name: modelName,
      url: url
    }, {
      headers: {
        Authorization: this.auth.getIdToken()
      }
    }).toPromise();
  }

  public getTrains(model) {
    const prj = this.project.getSelectedProject();
    return this.httpClient.get(`${environment.gateway}/v1/ml/models/trains?pid=${prj.id}&model=${model}`, {
      headers: {
        Authorization: this.auth.getIdToken()
      }
    }).toPromise();
  }

  public createTrain(model, train) {
    const prj = this.project.getSelectedProject();
    return this.httpClient.post(`${environment.gateway}/v1/ml/models/trains?pid=${prj.id}&model=${model}&train=${train}`, {}, {
      headers: {
        Authorization: this.auth.getIdToken()
      }
    }).toPromise();
  }

  public getConfig(model) {
    const prj = this.project.getSelectedProject();
    return this.httpClient.get(`${environment.gateway}/v1/ml/models/config?pid=${prj.id}&model=${model}`, {
      headers: {
        Authorization: this.auth.getIdToken()
      }
    }).toPromise();
  }
  public createConfig(model, train, config) {
    const prj = this.project.getSelectedProject();
    return this.httpClient.post(`${environment.gateway}/v1/ml/models/config?pid=${prj.id}&model=${model}&train=${train}`, {
      config: config
    }, {
      headers: {
        Authorization: this.auth.getIdToken()
      }
    }).toPromise();
  }

  public getTrainList(model) {
    const prj = this.project.getSelectedProject();
    return this.db.collection("projects")
      .doc(prj.id)
      .collection("models")
      .doc(model)
      .collection("trains").snapshotChanges();
  }
  public startTrain(model, train) {
    const prj = this.project.getSelectedProject();
    return this.httpClient.post(`${environment.gateway}/v1/ml/models/start-train?pid=${prj.id}&model=${model}&train=${train}`, {
    }, {
      headers: {
        Authorization: this.auth.getIdToken()
      }
    }).toPromise();
  }

  public infer(model, train, label_map_dir, input_dir, output_dir) {
    const prj = this.project.getSelectedProject();
    return this.httpClient.post(`${environment.gateway}/v1/ml/models/infer?pid=${prj.id}&model=${model}&train=${train}`, {
      label_map_dir: label_map_dir,
      input_dir: input_dir,
      output_dir: output_dir
    }, {
      headers: {
        Authorization: this.auth.getIdToken()
      }
    }).toPromise();
  }

}
