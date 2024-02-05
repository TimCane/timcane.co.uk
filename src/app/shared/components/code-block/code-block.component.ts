import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SecurityContext,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import * as Prism from 'prismjs';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-shell-session';
import 'prismjs/components/prism-typescript';

@Component({
  selector: 'tc-code-block',
  templateUrl: './code-block.component.html',
  styleUrls: ['./code-block.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CodeBlockComponent implements OnInit, OnChanges {
  @Input({ required: true }) language: string = '';
  @Input({ required: true }) code: string[] = [];

  html: string = '';

  constructor(private sanitizer: DomSanitizer) {}

  generateHtml() {
    let html: string | null = '';
    let code = this.code.join('\n');
    let language = this.language;

    html = Prism.highlight(code, Prism.languages[language], language);

    html = this.sanitizer.sanitize(SecurityContext.HTML, html);

    if (html) {
      this.html = html;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.generateHtml();
  }

  ngOnInit(): void {
    this.generateHtml();
  }
}
