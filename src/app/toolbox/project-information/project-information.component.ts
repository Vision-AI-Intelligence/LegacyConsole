import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { Project } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/services/project.service';
import { ProjectDialogComponent } from './dialogs/project-dialog/project-dialog.component';

@Component({
  selector: 'app-project-information',
  templateUrl: './project-information.component.html',
  styleUrls: ['./project-information.component.scss']
})
export class ProjectInformationComponent implements OnInit {

  constructor(private dialog: NbDialogService, private projectService: ProjectService) { }

  projects: Array<Project> = [];

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects() {
    this.projectService.getProjects().then((projects) => {
      this.projects = (projects['projects'] as Array<Project>);
    })
  }

  openCreateProjectDialog() {
    let dlg = this.dialog.open(ProjectDialogComponent, { closeOnBackdropClick: true, hasBackdrop: true });
    dlg.onClose.subscribe(() => {
      this.loadProjects();
    });
  }

}
