import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CliCommandsComponent } from './cli-commands.component';

const routes: Routes = [{ path: '', component: CliCommandsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CliCommandsRoutingModule { }
