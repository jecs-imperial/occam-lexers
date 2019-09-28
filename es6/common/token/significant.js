'use strict';

const Token = require('../token');

const significant = true;

class SignificantToken extends Token {
  clone(Class, startPosition, endPosition, ...remainingArguments) {
    if (endPosition === undefined) {
      endPosition = startPosition;
      startPosition = Class;
      Class = SignificantToken;
    }

    const significantToken = super.clone(Class, startPosition, endPosition, significant, ...remainingArguments);

    return significantToken;
  }

  static match(Class, content, ...remainingArguments) {
    if (content === undefined) {
      content = Class;
      Class = SignificantToken;
    }

    const significantToken = Token.match(Class, content, significant, ...remainingArguments);

    return significantToken;
  }

  static fromContent(Class, content, ...remainingArguments) {
    if (content === undefined) {
      content = Class;
      Class = SignificantToken;
    }

    const significantToken = Token.fromContent(Class, content, significant, ...remainingArguments);

    return significantToken;
  }

  static fromContentAndType(Class, content, type, ...remainingArguments) {
    if (type === undefined) {
      type = content;
      content = Class;
      Class = SignificantToken;
    }

    const significantToken = Token.fromContentAndType(Class, content, type, significant, ...remainingArguments);

    return significantToken;
  }
}

module.exports = SignificantToken;
