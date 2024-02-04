import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[tcContainer]',
})
export class ContainerDirective {
  protected _elementClass: string[] = [];

  @Input('class')
  @HostBinding('class')
  get elementClass(): string {
    return this._elementClass.join(' ');
  }
  set(val: string) {
    this._elementClass = val.split(' ');
  }

  constructor() {
    this._elementClass.push('container');
    this._elementClass.push('max-w-[90rem]');
    this._elementClass.push('mx-auto');
    this._elementClass.push('px-4');
    this._elementClass.push('py-2');
  }
}
