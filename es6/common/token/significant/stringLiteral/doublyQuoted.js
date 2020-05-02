"use strict";

import StringLiteralToken from "../../significant/stringLiteral";

import { stringLiteralType } from"../../../types";

export default class DoublyQuotedStringLiteralToken extends StringLiteralToken {
  clone(startPosition, endPosition) { return super.clone(DoublyQuotedStringLiteralToken, startPosition, endPosition); }

  static match(content) { return StringLiteralToken.match(DoublyQuotedStringLiteralToken, content); }

  static fromContent(content) { return StringLiteralToken.fromContent(DoublyQuotedStringLiteralToken, content); }
}

const type = stringLiteralType, ///
      regularExpression = /^"(?:\\.|[^"])*"/;

Object.assign(DoublyQuotedStringLiteralToken, {
  type,
  regularExpression
});
