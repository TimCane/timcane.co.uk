import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VerticalListComponent } from './vertical-list.component';

@NgModule({
  declarations: [VerticalListComponent],
  imports: [CommonModule],
  exports: [VerticalListComponent],
})
export class VerticalListModule {}
