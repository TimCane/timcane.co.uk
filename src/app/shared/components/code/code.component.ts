import { Component, Input } from '@angular/core';

@Component({
  selector: 'tc-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss'],
})
export class CodeComponent {
  @Input({ required: true }) language: string = '';
  @Input({ required: true }) code: string = '';
}
