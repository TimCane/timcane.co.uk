import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CodeBlockModule } from '../code-block/code-block.module';
import { TextBoxModule } from '../text-box/text-box.module';
import { InteractiveCodeBlockComponent } from './interactive-code-block.component';

@NgModule({
  declarations: [InteractiveCodeBlockComponent],
  imports: [CommonModule, CodeBlockModule, TextBoxModule],
  exports: [InteractiveCodeBlockComponent],
})
export class InteractiveCodeBlockModule {}
