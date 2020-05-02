"use strict";

import SignificantToken from "../../token/significant";

import { regularExpressionType } from "../../types";

export default class RegularExpressionToken extends SignificantToken {
  clone(startPosition, endPosition) { return super.clone(RegularExpressionToken, startPosition, endPosition); }

  static type = regularExpressionType;

  static regularExpression = /^\/(?:\\.|[^\/])*\//;

  static match(content) { return SignificantToken.match(RegularExpressionToken, content); }

  static fromContent(content) { return SignificantToken.fromContent(RegularExpressionToken, content); }
}
