import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'git',
        loadChildren: () => import('./git/git.module').then((m) => m.GitModule),
        data: {
          title: 'Git',
        },
      },
      {
        path: 'raspberry-pi',
        loadChildren: () =>
          import('./raspberry-pi/raspberry-pi.module').then(
            (m) => m.RaspberryPiModule
          ),
        data: {
          title: 'Raspberry PI',
        },
      },
      {
        path: 'angular',
        loadChildren: () =>
          import('./angular/angular.module').then((m) => m.AngularModule),
        data: {
          title: 'Angular',
        },
      },
      {
        path: '',
        loadChildren: () =>
          import('./root/root.module').then((m) => m.RootModule),
      },
    ],
    data: {
      title: 'Tim Cane',
      tags: {
        author: 'Tim Cane',
      },
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
