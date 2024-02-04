import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ContainerModule } from '../shared/directives/container/container.module';
import { RaspberryPiRoutingModule } from './raspberry-pi-routing.module';
import { RaspberryPiComponent } from './raspberry-pi.component';

@NgModule({
  declarations: [RaspberryPiComponent],
  imports: [CommonModule, RaspberryPiRoutingModule, ContainerModule],
})
export class RaspberryPiModule {}
