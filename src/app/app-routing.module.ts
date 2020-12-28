import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'project-information', loadChildren: () => import('./toolbox/project-information/project-information.module').then(m => m.ProjectInformationModule) },
  { path: 'project-setting', loadChildren: () => import('./toolbox/project-setting/project-setting.module').then(m => m.ProjectSettingModule) },
  { path: 'data-io-jobs', loadChildren: () => import('./toolbox/data-io-jobs/data-io-jobs.module').then(m => m.DataIOJobsModule) },
  { path: 'data-manipulation', loadChildren: () => import('./toolbox/data-manipulation/data-manipulation.module').then(m => m.DataManipulationModule) },
  { path: 'models-generate', loadChildren: () => import('./toolbox/models-generate/models-generate.module').then(m => m.ModelsGenerateModule) },
  { path: 'models-training', loadChildren: () => import('./toolbox/models-training/models-training.module').then(m => m.ModelsTrainingModule) },
  { path: 'models-ml-jobs', loadChildren: () => import('./toolbox/models-ml-jobs/models-ml-jobs.module').then(m => m.ModelsMLJobsModule) },
  { path: 'models-inference', loadChildren: () => import('./toolbox/models-inference/models-inference.module').then(m => m.ModelsInferenceModule) },
  { path: 'models-training', loadChildren: () => import('./toolbox/models-training/models-training.module').then(m => m.ModelsTrainingModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

