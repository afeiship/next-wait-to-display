/*!
 * name: @feizheng/next-wait-to-display
 * description: Wait element display in document.
 * homepage: https://github.com/afeiship/next-wait-to-display
 * version: 1.0.2
 * date: 2020-10-13T23:36:39.418Z
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');

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
