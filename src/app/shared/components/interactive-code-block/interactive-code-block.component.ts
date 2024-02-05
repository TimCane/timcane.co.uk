import { Component, Input, OnInit } from '@angular/core';

export interface CodeToken {
  key: string;
  label: string;
  value?: string;
}

@Component({
  selector: 'tc-interactive-code-block',
  templateUrl: './interactive-code-block.component.html',
  styleUrls: ['./interactive-code-block.component.scss'],
})
export class InteractiveCodeBlockComponent implements OnInit {
  @Input({ required: true }) language: string = '';
  @Input({ required: true }) code: string[] = [];
  @Input({ required: true }) tokens: CodeToken[] = [];

  isInteractive: boolean = false;

  interactiveCode: string[] = [];

  ngOnInit(): void {
    this.populateInteractiveCode(this.code);
  }

  populateInteractiveCode(code: string[]) {
    this.interactiveCode = [];

    for (let i = 0; i < code.length; i++) {
      this.interactiveCode.push(code[i]);
    }
  }

  onToggleInteractive() {
    this.isInteractive = !this.isInteractive;

    this.populateInteractiveCode(this.code);
  }

  onCopyCode() {
    navigator.clipboard.writeText(this.interactiveCode.join('\n'));
  }

  onTokenChange(key: string) {
    this.populateInteractiveCode(this.code);

    this.populateInteractiveCode(
      this.replaceTokens(this.interactiveCode, this.tokens)
    );

    console.log(this.interactiveCode, this.tokens);
  }

  replaceTokens(code: string[], tokens: CodeToken[]) {
    tokens.forEach((token) => {
      let value = `${token.key}`;

      if (
        token.value != undefined &&
        token.value != null &&
        token.value != ''
      ) {
        value = token.value;
      }

      for (let i = 0; i < code.length; i++) {
        code[i] = code[i].replaceAll(`${token.key}`, value);
      }
    });

    return code;
  }
}
