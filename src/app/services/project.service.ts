import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from './auth.service';
import { environment } from '../../environments/environment';
import { Project } from '../models/project.model';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private httpClient: HttpClient, private auth: AuthService) { }

  public async getProjects() {
    return this.httpClient.get(`${environment.gateway}/v1/projects`, {
      headers: {
        Authorization: this.auth.getIdToken()
      }
    }).toPromise();
  }

  public async createProject(project: Project) {
    return this.httpClient.post(`${environment.gateway}/v1/projects`, project, {
      headers: {
        Authorization: this.auth.getIdToken()
      }
    }).toPromise();
  }

}
