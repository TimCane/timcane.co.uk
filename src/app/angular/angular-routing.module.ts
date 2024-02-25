import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularComponent } from './angular.component';

const routes: Routes = [
  {
    path: '',
    component: AngularComponent,
    children: [
      {
        path: 'cli-commands',
        loadChildren: () =>
          import('./features/cli-commands/cli-commands.module').then(
            (m) => m.CliCommandsModule
          ),
        data: {
          title: 'CLI Commands',
          tags: {
            title: 'Boost Your Angular Workflow: Editable CLI Commands & Tips!',
            description:
              'Master Angular CLI like a pro! Discover useful, editable commands to automate tasks, improve efficiency, and accelerate your development. ✂️ Speed up coding with our collection of curated commands!',
            keywords:
              'Angular CLI, Angular commands, Angular development, Angular productivity, Angular automation, Angular tips, Angular tricks, editable commands, Angular cheatsheet, Angular best practices, Angular shortcuts, Angular efficiency',
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
export class AngularRoutingModule {}
