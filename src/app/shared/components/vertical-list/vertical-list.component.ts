import { Component, Input } from '@angular/core';

@Component({
  selector: 'tc-vertical-list',
  templateUrl: './vertical-list.component.html',
  styleUrls: ['./vertical-list.component.scss'],
})
export class VerticalListComponent {
  @Input({ required: true }) items: string[] = [];
}
