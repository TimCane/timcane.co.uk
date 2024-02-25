import { Component } from '@angular/core';

@Component({
  selector: 'tc-git',
  template: ` <div tcContainer>
    <tc-page-header />
    <router-outlet></router-outlet>
  </div>`,
  styles: [],
})
export class GitComponent {}
