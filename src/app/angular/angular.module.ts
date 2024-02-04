import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ContainerModule } from '../shared/directives/container/container.module';
import { AngularRoutingModule } from './angular-routing.module';
import { AngularComponent } from './angular.component';

@NgModule({
  declarations: [AngularComponent],
  imports: [CommonModule, AngularRoutingModule, ContainerModule],
})
export class AngularModule {}
