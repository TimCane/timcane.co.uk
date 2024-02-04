import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'raspberry-pi',
    loadChildren: () =>
      import('./raspberry-pi/raspberry-pi.module').then(
        (m) => m.RaspberryPiModule
      ),
  },
  {
    path: 'angular',
    loadChildren: () =>
      import('./angular/angular.module').then((m) => m.AngularModule),
  },
  {
    path: '',
    loadChildren: () => import('./root/root.module').then((m) => m.RootModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
