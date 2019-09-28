'use strict';

const necessary = require('necessary');

const types = require('./types'),
      contentUtilities = require('../utilities/content');

const { arrayUtilities } = necessary,
      { first } = arrayUtilities,
      { sanitiseContent } = contentUtilities,
      { commentType, endOfLineType, whitespaceType } = types;

class Token {
  constructor(type, content, innerHTML, significant) {
    this.type = type;
    this.content = content;
    this.innerHTML = innerHTML;
    this.significant = significant;
  }

  getType() {
    return this.type;
  }

  getContent() {
    return this.content;
  }
  
  getInnerHTML() {
    return this.innerHTML;
  }

  getContentLength() {
    const contentLength = this.content.length;

    return contentLength;
  }

  isSignificant() {
    return this.significant;
  }
  
  isCommentToken() {
    const typeCommentType = (this.type ===commentType),
          commentToken = typeCommentType; ///

    return commentToken;
  }

  isEndOfLineToken() {
    const typeEndOfLineType = (this.type === endOfLineType),
          endOfLineToken = typeEndOfLineType; ///

    return endOfLineToken;
  }

  isWhitespaceToken() {
    const typeWhitespaceType = (this.type === whitespaceType),
          whitespaceToken = typeWhitespaceType; ///

    return whitespaceToken;
  }

  isEqualTo(token) {
    const equalToToken = (this === token);

    return equalToToken;
  }

  asHTML() {
    const className = this.type,  ///
          html = `<span class="${className}">${this.innerHTML}</span>`;

    return html;
  }

  clone(Class, startPosition, endPosition, significant, ...remainingArguments) {
    let token = null;

    if (startPosition !== endPosition) {
      let content = this.getContent();

      content = content.substring(startPosition, endPosition);  ///

      const type = this.getType(),
            sanitisedContent = sanitiseContent(content),
            innerHTML = sanitisedContent; ///

      token = new Class(type, content, innerHTML, significant, ...remainingArguments);
    }

    return token;
  }

  static match(Class, content, significant, ...remainingArguments) {
    let token = null;

    const { type, regularExpression } = Class,
          match = content.match(regularExpression);

    if (match !== null) {
      const { index } = match;

      if (index === 0) {
        content = match[0]; ///

        const contentLength = content.length;

        if (contentLength > 0) {
          const sanitisedContent = sanitiseContent(content),
                innerHTML = sanitisedContent; ///

          token = new Class(type, content, innerHTML, significant, ...remainingArguments);
        }
      }
    }

    return token;
  }

  static fromContent(Class, content, significant, ...remainingArguments) {
    const { type } = Class,
          sanitisedContent = sanitiseContent(content),
          innerHTML = sanitisedContent, ///
          token = new Class(type, content, innerHTML, significant, ...remainingArguments);

    return token;
  }

  static fromContentAndType(Class, content, type, significant, ...remainingArguments) {
    const sanitisedContent = sanitiseContent(content),
          innerHTML = sanitisedContent, ///
          token = new Class(type, content, innerHTML, significant, ...remainingArguments);

    return token;
  }
}

module.exports = Token;
