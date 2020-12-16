import { Component, OnInit } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { timer } from 'rxjs';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-data-io-jobs',
  templateUrl: './data-io-jobs.component.html',
  styleUrls: ['./data-io-jobs.component.scss']
})
export class DataIOJobsComponent implements OnInit {

  constructor(private job: JobService, private toast: NbToastrService) { }

  jobIds = [];
  jobList = [];

  async getJobsInfo() {
    this.jobList.length = 0;
    for (let i = 0; i < this.jobIds.length; i++) {
      try {
        let data = await this.job.getJobInfo(this.jobIds[i]);
        this.jobList.push(data);
      }
      catch (err) {
        console.log(err);
      }
    }
  }

  ngOnInit(): void {
    this.job.getJobsStream("io").subscribe(async (jobs) => {
      for (let i = 0; i < jobs.length; i++) {
        console.log(jobs[i].payload.doc.data());
        this.jobIds.push(jobs[i].payload.doc.data().id);
        await this.getJobsInfo();
      }
    });
    timer(0, 5000).subscribe(async () => {
      await this.getJobsInfo();
    });
  }

  getColorStatus(i) {
    if (this.jobList[i].state.status == undefined) {
      return "basic";
    }
    if (this.jobList[i].state.status == "start") {
      return "success";
    }
    else if (this.jobList[i].state.status == "error") {
      return "danger";
    }
    return "basic";
  }

  getPercent(i) {
    const currentJob = this.jobList[i];
    if (currentJob.state.info == undefined) {
      return 0;
    }
    if (currentJob.state.info.includes("Download:")) {
      return currentJob.state.downloaded_size / currentJob.state.total_size * 100;
    }
    return 0;
  }

}
