import { Component, OnInit } from '@angular/core';
import { FormControl, PatternValidator, RequiredValidator, Validators } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';
import { Project } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  templateUrl: './project-dialog.component.html',
  styleUrls: ['./project-dialog.component.scss']
})
export class ProjectDialogComponent implements OnInit {

  constructor(private toast: NbToastrService, private projectService: ProjectService) { }

  idControl: FormControl;
  nameControl: FormControl;
  descriptionControl: FormControl;

  project: Project = {
    name: "",
    id: "",
    description: ""
  };

  ngOnInit(): void {
    this.idControl = new FormControl(this.project.id, [Validators.required, Validators.pattern("[a-zA-Z0-9\-\_]*")]);
    this.nameControl = new FormControl(this.project.name, [Validators.required]);
    this.descriptionControl = new FormControl(this.project.description);
  }

  async createProject() {
    if (!this.idControl.valid) {
      if (this.idControl.errors.required == true) {
        this.toast.danger("Require project id", "Project ID");
      }
      else {
        this.toast.danger("ID must contains alphabets, digits, underscores and hyphens only", "Project ID");
      }
      return;
    }
    if (!this.nameControl.valid) {
      this.toast.danger("Require project name", "Project name");
      return;
    }
    try {
      let res = await this.projectService.createProject({ id: this.idControl.value, name: this.nameControl.value, description: this.descriptionControl.value });
    }
    catch (err) {
      err.
    }
  }

}
