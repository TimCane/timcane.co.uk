import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CliCommandsRoutingModule } from './cli-commands-routing.module';
import { CliCommandsComponent } from './cli-commands.component';


@NgModule({
  declarations: [
    CliCommandsComponent
  ],
  imports: [
    CommonModule,
    CliCommandsRoutingModule
  ]
})
export class CliCommandsModule { }
