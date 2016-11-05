'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easyui = require('easyui'),
    TextArea = easyui.TextArea;

var Example = require('../example'),
    BasicLexer = require('../../../es6/basic/lexer');

var terminalSymbolsRegExpPatternTextAreaSelector = 'textarea#terminalSymbolsRegExpPattern',
    terminalSymbolsRegExpPatternTextArea = new TextArea(terminalSymbolsRegExpPatternTextAreaSelector);

var terminalSymbolsRegExpPattern = '\\+|\\-|\\*|\\/|\\(|\\)|\\d+';

var lexer = null;

var BasicExample = function () {
  function BasicExample() {
    _classCallCheck(this, BasicExample);
  }

  _createClass(BasicExample, null, [{
    key: 'run',
    value: function run() {
      var terminalSymbolsRegExpPatternTextAreaValue = terminalSymbolsRegExpPattern; ///

      terminalSymbolsRegExpPatternTextArea.setValue(terminalSymbolsRegExpPatternTextAreaValue);

      update();

      terminalSymbolsRegExpPatternTextArea.onChange(function () {
        update();
      });

      Example.contentTextAreaOnChange(function (contextTextAreaValue) {
        update();
      });
    }
  }]);

  return BasicExample;
}();

module.exports = BasicExample;

function update() {
  updateLexer();

  if (lexer !== null) {
    Example.updateTokens(lexer);
  } else {
    Example.clearTokens();
  }
}

function updateLexer() {
  var terminalSymbolsRegExpPatternInputValue = terminalSymbolsRegExpPatternTextArea.getValue(),
      terminalSymbolsRegExpPattern = terminalSymbolsRegExpPatternInputValue,
      ///
  terminalSymbolsRegExpPatternIsValid = regExpPatternIsValid(terminalSymbolsRegExpPattern);

  if (terminalSymbolsRegExpPatternIsValid) {
    var terminalSymbolsRegExp = new RegExp(terminalSymbolsRegExpPattern),
        grammar = [{ terminalSymbol: terminalSymbolsRegExp }];

    lexer = BasicLexer.fromGrammar(grammar);

    terminalSymbolsRegExpPatternTextArea.removeClass('error');
  } else {
    terminalSymbolsRegExpPatternTextArea.addClass('error');

    lexer = null;
  }
}

function regExpPatternIsValid(regExpPattern) {
  var valid = true;

  try {
    new RegExp(regExpPattern);
  } catch (error) {
    valid = false;
  }

  return valid;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL2Jhc2ljLmpzIl0sIm5hbWVzIjpbImVhc3l1aSIsInJlcXVpcmUiLCJUZXh0QXJlYSIsIkV4YW1wbGUiLCJCYXNpY0xleGVyIiwidGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVyblRleHRBcmVhU2VsZWN0b3IiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuVGV4dEFyZWEiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuIiwibGV4ZXIiLCJCYXNpY0V4YW1wbGUiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuVGV4dEFyZWFWYWx1ZSIsInNldFZhbHVlIiwidXBkYXRlIiwib25DaGFuZ2UiLCJjb250ZW50VGV4dEFyZWFPbkNoYW5nZSIsImNvbnRleHRUZXh0QXJlYVZhbHVlIiwibW9kdWxlIiwiZXhwb3J0cyIsInVwZGF0ZUxleGVyIiwidXBkYXRlVG9rZW5zIiwiY2xlYXJUb2tlbnMiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuSW5wdXRWYWx1ZSIsImdldFZhbHVlIiwidGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybklzVmFsaWQiLCJyZWdFeHBQYXR0ZXJuSXNWYWxpZCIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cCIsIlJlZ0V4cCIsImdyYW1tYXIiLCJ0ZXJtaW5hbFN5bWJvbCIsImZyb21HcmFtbWFyIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsInJlZ0V4cFBhdHRlcm4iLCJ2YWxpZCIsImVycm9yIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsU0FBU0MsUUFBUSxRQUFSLENBQWI7QUFBQSxJQUNJQyxXQUFXRixPQUFPRSxRQUR0Qjs7QUFHQSxJQUFJQyxVQUFVRixRQUFRLFlBQVIsQ0FBZDtBQUFBLElBQ0lHLGFBQWFILFFBQVEsMEJBQVIsQ0FEakI7O0FBR0EsSUFBSUksK0NBQStDLHVDQUFuRDtBQUFBLElBQ0lDLHVDQUF1QyxJQUFJSixRQUFKLENBQWFHLDRDQUFiLENBRDNDOztBQUdBLElBQUlFLDZEQUFKOztBQUVBLElBQUlDLFFBQVEsSUFBWjs7SUFFTUMsWTs7Ozs7OzswQkFDUztBQUNYLFVBQUlDLDRDQUE0Q0gsNEJBQWhELENBRFcsQ0FDbUU7O0FBRTlFRCwyQ0FBcUNLLFFBQXJDLENBQThDRCx5Q0FBOUM7O0FBRUFFOztBQUVBTiwyQ0FBcUNPLFFBQXJDLENBQThDLFlBQVc7QUFDdkREO0FBQ0QsT0FGRDs7QUFJQVQsY0FBUVcsdUJBQVIsQ0FBZ0MsVUFBU0Msb0JBQVQsRUFBK0I7QUFDN0RIO0FBQ0QsT0FGRDtBQUdEOzs7Ozs7QUFHSEksT0FBT0MsT0FBUCxHQUFpQlIsWUFBakI7O0FBRUEsU0FBU0csTUFBVCxHQUFrQjtBQUNoQk07O0FBRUEsTUFBSVYsVUFBVSxJQUFkLEVBQW9CO0FBQ2xCTCxZQUFRZ0IsWUFBUixDQUFxQlgsS0FBckI7QUFDRCxHQUZELE1BRU87QUFDTEwsWUFBUWlCLFdBQVI7QUFDRDtBQUNGOztBQUVELFNBQVNGLFdBQVQsR0FBdUI7QUFDckIsTUFBSUcseUNBQXlDZixxQ0FBcUNnQixRQUFyQyxFQUE3QztBQUFBLE1BQ0lmLCtCQUErQmMsc0NBRG5DO0FBQUEsTUFDNEU7QUFDeEVFLHdDQUFzQ0MscUJBQXFCakIsNEJBQXJCLENBRjFDOztBQUlBLE1BQUlnQixtQ0FBSixFQUF5QztBQUN2QyxRQUFJRSx3QkFBd0IsSUFBSUMsTUFBSixDQUFXbkIsNEJBQVgsQ0FBNUI7QUFBQSxRQUNJb0IsVUFBVSxDQUNSLEVBQUVDLGdCQUFpQkgscUJBQW5CLEVBRFEsQ0FEZDs7QUFLQWpCLFlBQVFKLFdBQVd5QixXQUFYLENBQXVCRixPQUF2QixDQUFSOztBQUVBckIseUNBQXFDd0IsV0FBckMsQ0FBaUQsT0FBakQ7QUFDRCxHQVRELE1BU087QUFDTHhCLHlDQUFxQ3lCLFFBQXJDLENBQThDLE9BQTlDOztBQUVBdkIsWUFBUSxJQUFSO0FBQ0Q7QUFDRjs7QUFFRCxTQUFTZ0Isb0JBQVQsQ0FBOEJRLGFBQTlCLEVBQTZDO0FBQzNDLE1BQUlDLFFBQVEsSUFBWjs7QUFFQSxNQUFJO0FBQ0YsUUFBSVAsTUFBSixDQUFXTSxhQUFYO0FBQ0QsR0FGRCxDQUdBLE9BQU9FLEtBQVAsRUFBYztBQUNaRCxZQUFRLEtBQVI7QUFDRDs7QUFFRCxTQUFPQSxLQUFQO0FBQ0QiLCJmaWxlIjoiYmFzaWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBlYXN5dWkgPSByZXF1aXJlKCdlYXN5dWknKSxcbiAgICBUZXh0QXJlYSA9IGVhc3l1aS5UZXh0QXJlYTtcblxudmFyIEV4YW1wbGUgPSByZXF1aXJlKCcuLi9leGFtcGxlJyksXG4gICAgQmFzaWNMZXhlciA9IHJlcXVpcmUoJy4uLy4uLy4uL2VzNi9iYXNpYy9sZXhlcicpO1xuXG52YXIgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVyblRleHRBcmVhU2VsZWN0b3IgPSAndGV4dGFyZWEjdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybicsXG4gICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVyblRleHRBcmVhID0gbmV3IFRleHRBcmVhKHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5UZXh0QXJlYVNlbGVjdG9yKTtcblxudmFyIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4gPSBgXFxcXCt8XFxcXC18XFxcXCp8XFxcXC98XFxcXCh8XFxcXCl8XFxcXGQrYDtcblxudmFyIGxleGVyID0gbnVsbDtcblxuY2xhc3MgQmFzaWNFeGFtcGxlIHtcbiAgc3RhdGljIHJ1bigpIHtcbiAgICB2YXIgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVyblRleHRBcmVhVmFsdWUgPSB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuOyAvLy9cblxuICAgIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5UZXh0QXJlYS5zZXRWYWx1ZSh0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuVGV4dEFyZWFWYWx1ZSk7XG5cbiAgICB1cGRhdGUoKTtcblxuICAgIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5UZXh0QXJlYS5vbkNoYW5nZShmdW5jdGlvbigpIHtcbiAgICAgIHVwZGF0ZSgpO1xuICAgIH0pO1xuXG4gICAgRXhhbXBsZS5jb250ZW50VGV4dEFyZWFPbkNoYW5nZShmdW5jdGlvbihjb250ZXh0VGV4dEFyZWFWYWx1ZSkge1xuICAgICAgdXBkYXRlKCk7XG4gICAgfSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCYXNpY0V4YW1wbGU7XG5cbmZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgdXBkYXRlTGV4ZXIoKTtcblxuICBpZiAobGV4ZXIgIT09IG51bGwpIHtcbiAgICBFeGFtcGxlLnVwZGF0ZVRva2VucyhsZXhlcik7XG4gIH0gZWxzZSB7XG4gICAgRXhhbXBsZS5jbGVhclRva2VucygpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxleGVyKCkge1xuICB2YXIgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybklucHV0VmFsdWUgPSB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuVGV4dEFyZWEuZ2V0VmFsdWUoKSxcbiAgICAgIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4gPSB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuSW5wdXRWYWx1ZSwgIC8vL1xuICAgICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybklzVmFsaWQgPSByZWdFeHBQYXR0ZXJuSXNWYWxpZCh0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuKTtcblxuICBpZiAodGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybklzVmFsaWQpIHtcbiAgICB2YXIgdGVybWluYWxTeW1ib2xzUmVnRXhwID0gbmV3IFJlZ0V4cCh0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuKSxcbiAgICAgICAgZ3JhbW1hciA9IFtcbiAgICAgICAgICB7IHRlcm1pbmFsU3ltYm9sIDogdGVybWluYWxTeW1ib2xzUmVnRXhwIH1cbiAgICAgICAgXTtcblxuICAgIGxleGVyID0gQmFzaWNMZXhlci5mcm9tR3JhbW1hcihncmFtbWFyKTtcblxuICAgIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5UZXh0QXJlYS5yZW1vdmVDbGFzcygnZXJyb3InKTtcbiAgfSBlbHNlIHtcbiAgICB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuVGV4dEFyZWEuYWRkQ2xhc3MoJ2Vycm9yJyk7XG5cbiAgICBsZXhlciA9IG51bGw7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVnRXhwUGF0dGVybklzVmFsaWQocmVnRXhwUGF0dGVybikge1xuICB2YXIgdmFsaWQgPSB0cnVlO1xuXG4gIHRyeSB7XG4gICAgbmV3IFJlZ0V4cChyZWdFeHBQYXR0ZXJuKTtcbiAgfVxuICBjYXRjaCAoZXJyb3IpIHtcbiAgICB2YWxpZCA9IGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHZhbGlkO1xufVxuIl19