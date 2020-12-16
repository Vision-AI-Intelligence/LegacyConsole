import { Component, OnInit } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { BucketService } from 'src/app/services/bucket.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-setting',
  templateUrl: './project-setting.component.html',
  styleUrls: ['./project-setting.component.scss']
})
export class ProjectSettingComponent implements OnInit {

  constructor(private projectService: ProjectService, private bucketService: BucketService, private toast: NbToastrService) { }

  ngOnInit(): void {
    this.checkBucketExists();
  }

  public deleteProject() {
    this.projectService.deleteProject(this.projectService.getSelectedProject())
      .then(() => {
        this.toast.success("Deleted project", "Success");
        window.location.reload();
      })
      .catch((err) => {
        this.toast.danger(err.error.message, "Cannot delete project");
      })
  }

  bucketExists = false;

  public checkBucketExists() {
    this.bucketService.walk("/").then(() => {
      this.bucketExists = true;
    })
      .catch(err => {
        console.log(err);
        this.bucketExists = false;
      })
  }

  public createBucket() {
    this.bucketService.createBucket().then(() => {
      this.toast.success("Created storage drive", "Success");
      this.checkBucketExists();
    })
      .catch((err) => {
        this.toast.danger(err.error.message, "Cannot create storage drive");
        this.checkBucketExists();
      });

  }

  public deleteBucket() {
    this.bucketService.deleteBucket().then(() => {
      this.toast.success("Deleted storage drive", "Success");
      this.checkBucketExists();
    })
      .catch((err) => {
        this.toast.danger(err.error.message, "Cannot delete storage drive");
        this.checkBucketExists();
      });
  }

}
