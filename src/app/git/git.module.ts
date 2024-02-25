import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PageHeaderModule } from '../shared/components/page-header/page-header.module';
import { ContainerModule } from '../shared/directives/container/container.module';
import { GitRoutingModule } from './git-routing.module';
import { GitComponent } from './git.component';

@NgModule({
  declarations: [GitComponent],
  imports: [CommonModule, GitRoutingModule, ContainerModule, PageHeaderModule],
})
export class GitModule {}
