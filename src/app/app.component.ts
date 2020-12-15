import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NbMenuItem, NbSidebarService } from '@nebular/theme';
import * as firebase from 'firebase';
import { ProjectService } from './services/project.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Vision Intelligence Console';
  menus: NbMenuItem[] = [
    {
      title: 'Projects',
      icon: 'folder',
      expanded: true,
      children: [
        {
          title: 'Information',
          icon: 'question-mark-circle',
          link: 'project-information'
        },
        {
          title: 'Setting',
          icon: 'settings',
          link: 'project-setting'
        },
      ],
    },
    {
      title: 'Data',
      icon: 'hard-drive',
      expanded: true,
      children: [
        {
          title: "I/O Jobs",
          icon: 'briefcase',
          link: 'data-io-jobs'
        },
        {
          title: "Manipulation",
          icon: 'edit',
          link: 'data-manipulation'
        }
      ]
    },
    {
      title: 'Models',
      icon: 'cube',
      expanded: true,
      children: [
        {
          title: "Generate",
          icon: 'loader-outline',
          link: 'models-generate'
        },
        {
          title: "Training",
          icon: 'activity',
          link: 'models-training'
        },
        {
          title: "ML Jobs",
          icon: 'browser',
          link: 'models-ml-jobs'
        },
        {
          title: "Inference",
          icon: 'bulb',
          link: 'models-inference'
        }
      ]
    },
  ];
  constructor(public sidebarService: NbSidebarService, public auth: AngularFireAuth, public projectService: ProjectService) { }

  ngOnInit(): void {
    this.auth.authState.subscribe(async (user) => {
      this.currentUser = user;
      let pro = (await this.projectService.getProjects());
      console.log(pro);
    });
  }

  projects = [];
  currentUser = null;

  async login() {
    await this.auth.signInWithPopup(new firebase.default.auth.GoogleAuthProvider());
    this.projects = (await this.projectService.getProjects())['projects'];
    console.log(this.projects);
  }

  signOut() {
    this.auth.signOut();
    this.projects.length = 0;
  }


}
