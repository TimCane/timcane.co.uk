import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GitComponent } from './git.component';

const routes: Routes = [
  {
    path: '',
    component: GitComponent,
    children: [
      {
        path: 'commands',
        loadChildren: () =>
          import('./features/commands/commands.module').then(
            (m) => m.CommandsModule
          ),
        data: {
          title: 'Commands',
          tags: {
            title:
              'Master Git! Essential Commands for Everyday Workflow (2024)',
            description:
              'Conquer Git like a pro! This ultimate cheat sheet compiles all the essential Git commands you need for efficient version control in 2024. Get started, manage branches, collaborate seamlessly, and avoid common pitfalls - all in one place!',
            keywords:
              'git commands, git cheat sheet, git tutorial, git for beginners, version control, git branching, merge conflicts, collaborate with git, git tips, git best practices, common git commands, git command examples, git workflow',
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
export class GitRoutingModule {}
