import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import { ProjectService } from './project.service';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private httpClient: HttpClient, private auth: AuthService, private project: ProjectService, private firestore: AngularFirestore) { }

  public getJobInfo(jobId) {
    return this.httpClient.get(`${environment.gateway}/v1/jobs?jobId=${jobId}`, {
      headers: {
        Authorization: this.auth.getIdToken()
      }
    }).toPromise();
  }

  public getJobsStream(type) {
    let prj = this.project.getSelectedProject();
    return this.firestore
      .collection("projects")
      .doc(prj.id)
      .collection(`jobs-${type}`)
      .snapshotChanges();
  }

  public async removeJob(jobId, type) {
    let prj = this.project.getSelectedProject();
    await this.firestore
      .collection("projects")
      .doc(prj.id)
      .collection(`jobs-${type}`).doc(jobId).delete();
  }

}
