'use strict';

var Token = require('../token');

class ErrorToken extends Token {
  constructor(content, line, message) {
    super(content, line);

    this.message = message;
  }
  
  clone() {
    var content = this.getContent(),
        line = this.getLine(),
        message = this.getMessage(),
        errorToken = new ErrorToken(content, line, message);
    
    return errorToken;
  }
  
  getMessage() {
    return this.message;
  }

  updateHTML() {
    var content = this.getContent(),
        innerHTML = content, ///
        className = 'error',  ///
        sanitisedInnerHTML = Token.sanitiseHTML(innerHTML),
        html = `<span class="${className}"">${sanitisedInnerHTML}</span>`;

    this.setHTML(html);
  }
}

module.exports = ErrorToken;
