import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContainerDirective } from './container.directive';

@NgModule({
  declarations: [ContainerDirective],
  imports: [CommonModule],
  exports: [ContainerDirective],
})
export class ContainerModule {}
