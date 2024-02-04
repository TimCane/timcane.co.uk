import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CodeBlockComponent } from './code-block.component';

@NgModule({
  declarations: [CodeBlockComponent],
  imports: [CommonModule],
  exports: [CodeBlockComponent],
})
export class CodeBlockModule {}
