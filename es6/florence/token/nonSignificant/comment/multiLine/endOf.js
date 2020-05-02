"use strict";

import NonSignificantToken from "../../../../../common/token/nonSignificant";

import { endOfMultiLineCommentType } from "../../../../../common/types";

export default class EndOfMultiLineCommentToken extends NonSignificantToken {
  clone(startPosition, endPosition) { return super.clone(EndOfMultiLineCommentToken, startPosition, endPosition); }

  isInComment() {
    const inComment = false;

    return inComment;
  }

  static match(content) { return NonSignificantToken.match(EndOfMultiLineCommentToken, content); }

  static fromContent(content) { return NonSignificantToken.fromContent(EndOfMultiLineCommentToken, content); }
}

const type = endOfMultiLineCommentType,  ///
      regularExpression = /^###/;

Object.assign(EndOfMultiLineCommentToken, {
  type,
  regularExpression
});
