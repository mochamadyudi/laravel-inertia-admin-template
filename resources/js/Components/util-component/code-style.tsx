import styled from 'styled-components';

export const CodeContainer = styled.code`
  color: #a9b7c6;
  font-family: Consolas, Monaco, 'Andale Mono', monospace;
  direction: ltr;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  line-height: 1.5;
  tab-size: 4;
  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;

  ::-moz-selection,
  ::selection {
    color: inherit;
    background: rgba(33, 66, 131, 0.85);
  }

  &:not(pre) {
    //background: #2b2b2b;
    padding: 0.1em;
    border-radius: 0.3em;
  }
`;

export const PreContainer = styled.pre`
  color: #a9b7c6;
  font-family: Consolas, Monaco, 'Andale Mono', monospace;
  direction: ltr;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  line-height: 1.5;
  tab-size: 4;
  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
  padding: 1em;
  margin: 0.5em 0;
  overflow: auto;
  background: #2b2b2b;

  ::-moz-selection,
  ::selection {
    color: inherit;
    background: rgba(33, 66, 131, 0.85);
  }
`;

export const TokenSpan = styled.span`
  &.comment,
  &.prolog,
  &.cdata {
    color: #808080;
  }

  &.delimiter,
  &.boolean,
  &.keyword,
  &.selector,
  &.important,
  &.atrule {
    color: #cc7832;
  }

  &.operator,
  &.punctuation,
  &.attr-name {
    color: #a9b7c6;
  }

  &.tag,
  &.tag .punctuation,
  &.doctype,
  &.builtin {
    color: #e8bf6a;
  }

  &.entity,
  &.number,
  &.symbol {
    color: #6897bb;
  }

  &.property,
  &.constant,
  &.variable {
    color: #9876aa;
  }

  &.string,
  &.char,
  &.attr-value {
    color: #6a8759;
  }

  &.attr-value .punctuation:first-child {
    color: #a9b7c6;
  }

  &.url {
    color: #287bde;
    text-decoration: underline;
  }

  &.function {
    color: #ffc66d;
  }

  &.regex {
    background: #364135;
  }

  &.bold {
    font-weight: bold;
  }

  &.italic {
    font-style: italic;
  }

  &.inserted {
    background: #294436;
  }

  &.deleted {
    background: #484a4a;
  }
`;
