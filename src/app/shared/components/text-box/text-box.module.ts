import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TextBoxComponent } from './text-box.component';

@NgModule({
  declarations: [TextBoxComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [TextBoxComponent],
})
export class TextBoxModule {}
