import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PageHeaderModule } from '../shared/components/page-header/page-header.module';
import { ContainerModule } from '../shared/directives/container/container.module';
import { RaspberryPiRoutingModule } from './raspberry-pi-routing.module';
import { RaspberryPiComponent } from './raspberry-pi.component';

@NgModule({
  declarations: [RaspberryPiComponent],
  imports: [
    CommonModule,
    RaspberryPiRoutingModule,
    ContainerModule,
    PageHeaderModule,
  ],
})
export class RaspberryPiModule {}
