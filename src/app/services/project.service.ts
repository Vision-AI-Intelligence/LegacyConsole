import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from './auth.service';
import { environment } from '../../environments/environment';
import { Project } from '../models/project.model';
import { EventEmitter } from 'events';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private httpClient: HttpClient, private auth: AuthService) { }

  public onSelecteProjectChange: EventEmitter = new EventEmitter();
  private selectedProject = null;

  public getProjects() {
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

  public async updateProject(project: Project) {
    return this.httpClient.put(`${environment.gateway}/v1/projects`, {
      pid: project.id,
      ...project
    }, {
      headers: {
        Authorization: this.auth.getIdToken()
      }
    }).toPromise();
  }

  public deleteProject(project: Project) {
    return this.httpClient.delete(`${environment.gateway}/v1/projects?pid=${project.id}`, {
      headers: {
        Authorization: this.auth.getIdToken()
      }
    }).toPromise();
  }

  public selectProject(project: Project) {
    this.onSelecteProjectChange.emit("selected", project);
    this.selectedProject = project;
  }

  public getSelectedProject(): Project {
    return this.selectedProject;
  }

}
