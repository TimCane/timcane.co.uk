import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HorizontalListModule } from 'src/app/shared/components/horizontal-list/horizontal-list.module';
import { VerticalListModule } from 'src/app/shared/components/vertical-list/vertical-list.module';
import { ExperienceBlockComponent } from './experience-block.component';

@NgModule({
  declarations: [ExperienceBlockComponent],
  imports: [CommonModule, HorizontalListModule, VerticalListModule],
  exports: [ExperienceBlockComponent],
})
export class ExperienceBlockModule {}
