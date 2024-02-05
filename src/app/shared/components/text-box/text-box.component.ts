import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'tc-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.scss'],
})
export class TextBoxComponent implements OnInit {
  @Input({ required: true }) label: string = '';
  @Input({ required: true }) key: string = '';
  @Input({ required: true }) value: string | undefined = undefined;
  @Output() valueChange = new EventEmitter<string | undefined>();

  control: FormControl<string | null> = new FormControl();

  ngOnInit(): void {
    this.control.setValue(this.value ?? null);
  }

  onChange(value: string) {
    this.valueChange.emit(value);

    console.log(this.value);
  }
}
