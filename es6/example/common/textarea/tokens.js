"use strict";

const easy = require("easy");

const { Textarea } = easy;

class TokensTextarea extends Textarea {
  setTokens(tokens) {
    let lineNumber = 1,
        previousToken = null;

    const html = tokens.reduce(function(html, token) {
      const tokenHTML = token.asHTML();

      if (previousToken === null) {
        html += `${lineNumber++}: `;
      } else {
        const previousTokenEndOfLineToken = previousToken.isEndOfLineToken();

        if (previousTokenEndOfLineToken) {
          html += `${lineNumber++}: `;
        }
      }

      html += tokenHTML;

      previousToken = token;

      return html;
    }, "");

    this.html(html);
  }

  clearTokens() {
    const html = "";

    this.html(html);
  }

  parentContext() {
    const setTokens = this.setTokens.bind(this),
          clearTokens = this.clearTokens.bind(this);

    return ({
      setTokens,
      clearTokens
    });
  }
}

Object.assign(TokensTextarea, {
  tagName: "textarea",
  defaultProperties: {
    className: "tokens",
    spellCheck: "false",
    readOnly: true,
    rows: "30"
  }
});

module.exports = TokensTextarea;
