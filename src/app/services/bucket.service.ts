import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import { ProjectService } from './project.service';

@Injectable({
  providedIn: 'root'
})
export class BucketService {

  constructor(private httpClient: HttpClient, private auth: AuthService, private project: ProjectService) { }

  public walk(dir) {
    let prj = this.project.getSelectedProject();
    return this.httpClient.get(`${environment.gateway}/v1/bucket/runner/io/walk?pid=${prj.id}&dir=${dir}`, {
      headers: {
        Authorization: this.auth.getIdToken()
      }
    }).toPromise();
  }

  public createBucket() {
    let prj = this.project.getSelectedProject();
    return this.httpClient.post(`${environment.gateway}/v1/bucket/runner/io?pid=${prj.id}`, {}, {
      headers: {
        Authorization: this.auth.getIdToken()
      }
    }).toPromise();
  }

  public deleteBucket() {
    let prj = this.project.getSelectedProject();
    return this.httpClient.delete(`${environment.gateway}/v1/bucket/runner/io?pid=${prj.id}`, {
      headers: {
        Authorization: this.auth.getIdToken()
      }
    }).toPromise();
  }

  public deleteFile(file) {
    let prj = this.project.getSelectedProject();
    return this.httpClient.delete(`${environment.gateway}/v1/bucket/runner/rm?pid=${prj.id}&file=${file}`, {
      headers: {
        Authorization: this.auth.getIdToken()
      }
    }).toPromise();
  }

  public downloadJob(url, filename) {
    let prj = this.project.getSelectedProject();
    return this.httpClient.post(`${environment.gateway}/v1/bucket/runner/download?pid=${prj.id}`, { url: url, filename: filename, section: 'data' }, {
      headers: {
        Authorization: this.auth.getIdToken()
      }
    }).toPromise();
  }

}
