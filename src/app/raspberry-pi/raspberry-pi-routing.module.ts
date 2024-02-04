import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RaspberryPiComponent } from './raspberry-pi.component';

const routes: Routes = [
  {
    path: '',
    component: RaspberryPiComponent,
    children: [
      {
        path: 'cluster',
        loadChildren: () =>
          import('./features/cluster/cluster.module').then(
            (m) => m.ClusterModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RaspberryPiRoutingModule {}
