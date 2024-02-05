import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CodeModule } from 'src/app/shared/components/code/code.module';
import { InteractiveCodeBlockModule } from 'src/app/shared/components/interactive-code-block/interactive-code-block.module';
import { CliCommandsRoutingModule } from './cli-commands-routing.module';
import { CliCommandsComponent } from './cli-commands.component';

@NgModule({
  declarations: [CliCommandsComponent],
  imports: [
    CommonModule,
    CliCommandsRoutingModule,
    InteractiveCodeBlockModule,
    CodeModule,
  ],
})
export class CliCommandsModule {}
