'use strict';

var easyui = require('easyui'),
    easyuilayout = require('easyui-layout'),
    TextArea = easyui.TextArea,
    SizeableElement = easyuilayout.SizeableElement,
    VerticalSplitter = easyuilayout.VerticalSplitter;

var leftColumnSelector = '#leftColumn',
    contentTextAreaSelector = 'textArea#content',
    tokensTextAreaSelector = 'textArea#tokens',
    contentTextArea = new TextArea(contentTextAreaSelector),
    tokensTextArea = new TextArea(tokensTextAreaSelector),
    leftColumn = new SizeableElement(leftColumnSelector),
    TO_THE_RIGHT_OF = VerticalSplitter.situated.TO_THE_RIGHT_OF;

new VerticalSplitter('.left.vertical.splitter', TO_THE_RIGHT_OF, leftColumn);

class Example {
  static contentTextAreaOnKeyUp(handler) {
    contentTextArea.on('keyup', handler);
  }

  static updateTokens(lexer, lineNumber, minimumLinesLength, previousLineInComment, followingLineInComment) {
    var contentTextAreaValue = contentTextArea.getValue(),
        content = contentTextAreaValue,  ///
        contents = content.split(/\n/),
        lines = lexer.linesFromContents(contents, lineNumber, minimumLinesLength, previousLineInComment, followingLineInComment),
        htmls = lines.reduce(function(htmls, line) {
          var lineHTML = line.getHTML(),
              lineNumber = line.getNumber(),
              html = `${lineNumber}: ${lineHTML}`;

          htmls += html;

          return htmls;
        }, ''),
        tokensTextAreaHTML = htmls;  ///

    tokensTextArea.html(tokensTextAreaHTML);
  }

  static clearTokens() {
    var tokensTextAreaHTML = '';

    tokensTextArea.html(tokensTextAreaHTML);
  }
}

module.exports = Example;
