import { Component, OnInit } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-setting',
  templateUrl: './project-setting.component.html',
  styleUrls: ['./project-setting.component.scss']
})
export class ProjectSettingComponent implements OnInit {

  constructor(private projectService: ProjectService, private toast: NbToastrService) { }

  ngOnInit(): void {
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

}
