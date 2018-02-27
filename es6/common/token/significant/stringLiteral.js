'use strict';

const SignificantToken = require('../significant');

class StringLiteralToken extends SignificantToken {
  clone(startPosition, endPosition) { return super.clone(StringLiteralToken, startPosition, endPosition); }

  static fromContent(content) { return SignificantToken.fromContent(StringLiteralToken, content); }

  static fromWithinContent(content) { return SignificantToken.fromWithinContent(StringLiteralToken, content); }

  static positionWithinContent(content) { return SignificantToken.positionWithinContent(StringLiteralToken, content); }
}

const type = 'string',
      regularExpression = /"(?:\\.|[^"])*"/;

Object.assign(StringLiteralToken, {
  type: type,
  regularExpression: regularExpression
});

module.exports = StringLiteralToken;
