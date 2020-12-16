import { AfterViewInit, Component, OnInit } from '@angular/core';
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
    setTimeout(() => {
      this.loadProjects();
    }, 1000);
  }

  loadProjects() {
    this.projectService.getProjects().then((projects) => {
      console.log(projects);
      this.projects = (projects['projects'] as Array<Project>);
    }).catch(err => {
      console.log(err);
    })
  }

  openCreateProjectDialog() {
    let dlg = this.dialog.open(ProjectDialogComponent, { closeOnBackdropClick: true, hasBackdrop: true });
    dlg.onClose.subscribe(() => {
      this.loadProjects();
    });
  }

  openUpdateProjectDialog(project: Project) {
    let dlg = this.dialog.open(ProjectDialogComponent, {
      closeOnBackdropClick: true, hasBackdrop: true, context: {
        project: { ...project },
        mode: 'update'
      }
    });
    dlg.onClose.subscribe(() => {
      this.loadProjects();
    });
  }

  selectProject(project: Project) {
    this.projectService.selectProject(project);
  }

}
