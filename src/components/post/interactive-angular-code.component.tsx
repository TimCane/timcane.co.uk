import React, { type ChangeEvent } from "react";
import Prism from "prismjs";

import "prismjs/components/prism-typescript";
import "prismjs/components/prism-bash";

import parse from "html-react-parser";

interface Props {
  lang: "typescript" | "bash";
  code: string;
  tokens: CodeToken[];
}

interface CodeToken {
  key: string;
  label: string;
  value?: string;
}

interface State {
  isInteractive: boolean;
  code: string;
  tokens: CodeToken[];
}

export class InteractiveCode extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isInteractive: false,
      code: this.props.code,
      tokens: this.props.tokens,
    };
  }

  onToggleInteractive() {
    let isInteractive = !this.state.isInteractive;
    let code = "";

    if (isInteractive) {
      code = this.replaceTokens(this.props.code, this.state.tokens);
    } else {
      code = this.props.code;
    }

    this.setState({
      isInteractive: isInteractive,
      code: code,
    });
  }

  onCopyCode() {
    navigator.clipboard.writeText(this.state.code);
  }

  onTokenChange(key: string, value: string) {
    var tokens = this.state.tokens;
    var tokenIndex = tokens.findIndex((token) => token.key == key);
    tokens[tokenIndex].value = value;

    let code = this.replaceTokens(this.props.code, tokens);

    this.setState({ tokens, code });
  }

  replaceTokens(code: string, tokens: CodeToken[]) {
    tokens.forEach((token) => {
      let value = `${token.key}`;

      if (
        token.value != undefined &&
        token.value != null &&
        token.value != ""
      ) {
        value = token.value;
      }

      code = code.replaceAll(`${token.key}`, value);
    });

    return code;
  }

  render() {
    return (
      <div className="relative py-8 sm:py-4">
        <div className="relative">
          <div>
            <CodeBlock
              lang={this.props.lang}
              code={this.state.code}
            ></CodeBlock>
          </div>
          <div className="absolute -top-10 right-0 z-10 flex gap-2">
            <button
              onClick={() => this.onToggleInteractive()}
              className={
                "py-2 px-4 " + (this.state.isInteractive ? "bg-[#ddd]" : "")
              }
            >
              Edit
            </button>
            <button className="py-2 px-4" onClick={() => this.onCopyCode()}>
              Copy
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {this.state.isInteractive ? (
            this.state.tokens.map((token, i) => (
              <TokenInput
                key={i}
                label={token.label}
                name={token.key}
                value={token.value}
                onChange={(val) => this.onTokenChange(token.key, val)}
              />
            ))
          ) : (
            <div></div>
          )}
        </div>
      </div>
    );
  }
}

interface TokenInputProps {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
}

interface TokenInputState {
  value: string;
}

class TokenInput extends React.Component<TokenInputProps, TokenInputState> {
  constructor(props: TokenInputProps) {
    super(props);
    this.state = {
      value: this.props.value ?? "",
    };
  }

  onValueChange(event: ChangeEvent<HTMLInputElement>) {
    let val = event.target.value;

    this.setState({ value: val });
    this.props.onChange(val);
  }

  render() {
    return (
      <div className="flex items-center w-full">
        <label
          className="pr-2 w-3/12 text-center"
          htmlFor={`${this.props.name}-token`}
        >
          {this.props.label}
        </label>
        <input
          className="flex-grow"
          id={`${this.props.name}-token`}
          type="text"
          value={this.state.value}
          onChange={(val) => this.onValueChange(val)}
        />
      </div>
    );
  }
}

interface CodeBlockProps {
  lang: string;
  code: string;
}

interface CodeBlockState {
  html: string;
  code: string;
}

class CodeBlock extends React.Component<CodeBlockProps, CodeBlockState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      html: this.highlight(props.code, props.lang),
      code: props.code,
    };
  }

  highlight(code, language): string {
    return Prism.highlight(code, Prism.languages[language], language);
  }

  componentWillReceiveProps(nextProps: CodeBlockProps) {
    // You don't have to do this check first, but it can help prevent an unneeded render
    if (nextProps.code !== this.state.code) {
      this.setState({
        html: this.highlight(nextProps.code, nextProps.lang),
        code: nextProps.code,
      });
    }
  }

  render() {
    return (
      <pre>
        <code className={`language-${this.props.lang}`}>
          {parse(this.state.html)}
        </code>
      </pre>
    );
  }
}
