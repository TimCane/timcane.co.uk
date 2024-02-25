import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { InteractiveCodeBlockModule } from 'src/app/shared/components/interactive-code-block/interactive-code-block.module';
import { CommandsRoutingModule } from './commands-routing.module';
import { CommandsComponent } from './commands.component';

@NgModule({
  declarations: [CommandsComponent],
  imports: [CommonModule, CommandsRoutingModule, InteractiveCodeBlockModule],
})
export class CommandsModule {}
