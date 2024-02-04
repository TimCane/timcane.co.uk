import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ContainerModule } from 'src/app/shared/directives/container/container.module';
import { HorizontalListModule } from '../../../shared/components/horizontal-list/horizontal-list.module';
import { VerticalListModule } from '../../../shared/components/vertical-list/vertical-list.module';
import { CVRoutingModule } from './cv-routing.module';
import { CVComponent } from './cv.component';
import { ExperienceBlockModule } from './experience-block/experience-block.module';

@NgModule({
  declarations: [CVComponent],
  imports: [
    CommonModule,
    CVRoutingModule,
    ExperienceBlockModule,
    ContainerModule,
    HorizontalListModule,
    VerticalListModule,
  ],
})
export class CVModule {}
