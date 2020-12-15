import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { ProjectDialogComponent } from './dialogs/project-dialog/project-dialog.component';

@Component({
  selector: 'app-project-information',
  templateUrl: './project-information.component.html',
  styleUrls: ['./project-information.component.scss']
})
export class ProjectInformationComponent implements OnInit {

  constructor(private dialog: NbDialogService) { }

  ngOnInit(): void {
  }

  openCreateProjectDialog() {
    this.dialog.open(ProjectDialogComponent, { closeOnBackdropClick: true, hasBackdrop: true });
  }

}
