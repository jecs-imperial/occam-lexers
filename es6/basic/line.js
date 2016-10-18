'use strict';

var CommonLine = require('../common/line'),
    SignificantTokens = require('../common/significantTokens'),
    NonSignificantTokens = require('./nonSignificantTokens');

class Line extends CommonLine {
  static fromContent(content, context, rules) {
    var line = new Line(),
        nonSignficantTokensOrSignificantContent = NonSignificantTokens.pass(content, context, line),
        tokens = SignificantTokens.pass(nonSignficantTokensOrSignificantContent, line, rules);
    
    line.setTokens(tokens);
    
    return line;
  }
}

module.exports = Line;
