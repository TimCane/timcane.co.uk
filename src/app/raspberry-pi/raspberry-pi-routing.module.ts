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
        data: {
          title: 'Cluster',
          tags: {
            title:
              'Build Your Own Powerful Raspberry Pi Cluster in 2024: Step-by-Step Guide!',
            description:
              'Unleash the potential of Raspberry Pi! Learn how I built a high-performance cluster computer using Raspberry Pi 4B for a compact home automation server. Get the complete step-by-step guide with hardware, software, and configuration details!',
            keywords:
              'Raspberry Pi cluster, Raspberry Pi 4B cluster, DIY cluster computer, build Raspberry Pi cluster, Raspberry Pi project, high-performance computing, Raspberry Pi machine learning, Raspberry Pi video rendering, Raspberry Pi scientific computing, Raspberry Pi cluster guide, Raspberry Pi cluster tutorial',
          },
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
export class RaspberryPiRoutingModule {}
