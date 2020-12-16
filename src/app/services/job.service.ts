import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private httpClient: HttpClient, private auth: AuthService) { }

  public getJobInfo(jobId) {
    return this.httpClient.get(`${environment.gateway}/v1/jobs/`)
  }

}
