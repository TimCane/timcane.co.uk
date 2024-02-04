import {
  Component,
  Input,
  OnInit,
  SecurityContext,
  ViewEncapsulation,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import * as Prism from 'prismjs';
import 'prismjs/components/prism-shell-session';

@Component({
  selector: 'tc-code-block',
  templateUrl: './code-block.component.html',
  styleUrls: ['./code-block.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CodeBlockComponent implements OnInit {
  @Input({ required: true }) language: string = '';
  @Input({ required: true }) code: string[] = [];

  html: string = '';

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    let html: string | null = '';
    let code = this.code.join('\n');
    let language = this.language;

    html = Prism.highlight(code, Prism.languages[language], language);

    html = this.sanitizer.sanitize(SecurityContext.HTML, html);

    if (html) {
      this.html = html;
    }
  }
}
