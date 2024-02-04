import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CodeBlockModule } from 'src/app/shared/components/code-block/code-block.module';
import { CodeModule } from 'src/app/shared/components/code/code.module';
import { ClusterRoutingModule } from './cluster-routing.module';
import { ClusterComponent } from './cluster.component';

@NgModule({
  declarations: [ClusterComponent],
  imports: [CommonModule, ClusterRoutingModule, CodeBlockModule, CodeModule],
})
export class ClusterModule {}
