import { Component } from '@angular/core';
import { NbMenuItem, NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
  constructor(public sidebarService: NbSidebarService) { }
}
