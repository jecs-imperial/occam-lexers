'use strict';

const entries = require('./entries'),
      FlorenceLine = require('./line'),
      CommonLexer = require('../common/lexer');

class FlorenceLexer extends CommonLexer {
  static fromCombinedCustomGrammarsLexicalPattern(combinedCustomGrammarsLexicalPattern) {
    const custom = combinedCustomGrammarsLexicalPattern, ///
          customGrammarEntry = {
            custom: custom
          },
          customGrammarRule =  CommonLexer.ruleFromEntry(customGrammarEntry),
          rules = CommonLexer.rulesFromEntries(entries);

    rules.addRule(customGrammarRule);

    const florenceLexer = new FlorenceLexer(rules, FlorenceLine);

    return florenceLexer;
  }

  static fromEntries(entries) {
    const rules = CommonLexer.rulesFromEntries(entries),
          florenceLexer = new FlorenceLexer(rules, FlorenceLine);

    return florenceLexer;
  }

  static fromNothing() {
    const florenceLexer = FlorenceLexer.fromEntries(entries);

    return florenceLexer;
  }
}

FlorenceLexer.entries = entries;

module.exports = FlorenceLexer;

