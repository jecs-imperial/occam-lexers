'use strict';

const arrayUtil = require('../../../../util/array'),
      CommentToken = require('../comment');

class EndOfCommentToken extends CommentToken {
  clone(startPosition, endPosition) { return CommentToken.clone(EndOfCommentToken, this, startPosition, endPosition); }

  static fromContentAndLine(content, line) { return CommentToken.fromContentAndLine(EndOfCommentToken, content, line); }

  static fromWithinContentAndLine(content, line) {
    let endOfCommentToken = null;
    
    const matches = content.match(EndOfCommentToken.regularExpression);

    if (matches) {
      const firstMatch = arrayUtil.first(matches);

      content = firstMatch; ///

      endOfCommentToken = EndOfCommentToken.fromContentAndLine(content, line);
    }

    return endOfCommentToken;
  }

  static positionWithinContent(content) {
    const position = content.search(EndOfCommentToken.regularExpression);

    return position;
  }
}

EndOfCommentToken.regularExpression = /^\*\//;

module.exports = EndOfCommentToken;

