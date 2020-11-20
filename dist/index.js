/*!
 * name: @jswork/next-wait-to-display
 * description: Wait element display in document.
 * homepage: https://github.com/afeiship/next-wait-to-display
 * version: 1.0.0
 * date: 2020-11-20 10:54:47
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  nx.waitToDisplay = function (inSelector, inDelay, inCallback) {
    var el = document.querySelector(inSelector);
    if (el != null) {
      return inCallback(el);
    } else {
      setTimeout(function () {
        nx.waitToDisplay(inSelector, inDelay, inCallback);
      }, inDelay);
    }
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.waitToDisplay;
  }
})();
