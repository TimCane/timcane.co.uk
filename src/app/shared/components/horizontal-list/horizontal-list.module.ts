import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HorizontalListComponent } from './horizontal-list.component';

@NgModule({
  declarations: [HorizontalListComponent],
  imports: [CommonModule],
  exports: [HorizontalListComponent],
})
export class HorizontalListModule {}
