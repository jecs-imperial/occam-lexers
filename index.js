'use strict';

module.exports = {
  'SignificantToken': require('./lib/common/token/significant'),
  'NonSignificantToken': require('./lib/common/token/nonSignificant'),
  'BNFLexer': require('./lib/bnf/lexer'),
  'CSSLexer': require('./lib/css/lexer'),
  'LaTeXLexer': require('./lib/latex/lexer'),
  'BasicLexer': require('./lib/basic/lexer'),
  'PlainLexer': require('./lib/plain/lexer'),
  'MetaJSONLexer': require('./lib/metaJSON/lexer'),
  'FlorenceLexer': require('./lib/florence/lexer'),
  'CustomGrammarBNFLexer': require('./lib/customGrammarBNF/lexer'),
  'CustomGrammarLexicalPatternLexer': require('./lib/customGrammarLexicalPattern/lexer')
};
