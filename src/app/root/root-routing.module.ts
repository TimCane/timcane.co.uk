import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootComponent } from './root.component';

const routes: Routes = [
  {
    path: '',
    component: RootComponent,
    children: [
      {
        path: 'cv',
        loadChildren: () =>
          import('./features/cv/cv.module').then((m) => m.CVModule),
        data: {
          title: 'CV',
        },
      },
      {
        path: '',
        loadChildren: () =>
          import('./features/index/index.module').then((m) => m.IndexModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RootRoutingModule {}
