'use strict';

var Line = require('./line'),
    Context = require('./context'),
    grammar = require('./grammar'),
    CommonLexer = require('../common/lexer');

class FlorenceLexer extends CommonLexer {
  linesFromContent(content, context) {
    var inComment = false;

    context = context || new Context(inComment);  ///

    var lines = super.linesFromContent(content, context);

    return lines;
  }

  static getSignificantTokenTypes() { return CommonLexer.getSignificantTokenTypes(grammar); }

  static fromNothing() {
    var rules = CommonLexer.rulesFromGrammar(grammar),
        florenceLexer = new FlorenceLexer(rules, Line);

    return florenceLexer;
  }
}

module.exports = FlorenceLexer;
