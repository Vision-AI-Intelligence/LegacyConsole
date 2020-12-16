import { Component, OnInit } from '@angular/core';
import { FormControl, PatternValidator, RequiredValidator, Validators } from '@angular/forms';
import { NbDialogRef, NbToastrService } from '@nebular/theme';
import { Project } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  templateUrl: './project-dialog.component.html',
  styleUrls: ['./project-dialog.component.scss']
})
export class ProjectDialogComponent implements OnInit {

  constructor(private toast: NbToastrService, private projectService: ProjectService, private dialog: NbDialogRef<ProjectDialogComponent>) { }

  idControl: FormControl;
  nameControl: FormControl;
  descriptionControl: FormControl;

  project: Project = {
    name: "",
    id: "",
    description: ""
  };

  mode = "create";

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
      await this.projectService.createProject({ id: this.idControl.value, name: this.nameControl.value, description: this.descriptionControl.value });
      this.toast.success(`Project [${this.idControl.value}] was created`, "Success");
      this.dialog.close();
    }
    catch (err) {
      this.toast.danger(err.error.message, `Cannot create project [${this.idControl.value}]`);
    }
  }

  async updateProject() {
    if (!this.nameControl.valid) {
      this.toast.danger("Require project name", "Project name");
      return;
    }
    try {
      await this.projectService.updateProject({ id: this.idControl.value, name: this.nameControl.value, description: this.descriptionControl.value });
      this.toast.success(`Project [${this.idControl.value}] was updated`, "Success");
      this.dialog.close();
    }
    catch (err) {
      this.toast.danger(err.error.message, `Cannot update project [${this.idControl.value}]`);
    }
  }

}
