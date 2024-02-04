import { Component, Input } from '@angular/core';

@Component({
  selector: 'tc-horizontal-list',
  templateUrl: './horizontal-list.component.html',
  styleUrls: ['./horizontal-list.component.scss'],
})
export class HorizontalListComponent {
  @Input({ required: true }) items: string[] = [];
}
