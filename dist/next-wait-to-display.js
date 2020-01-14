/*!
 * name: @feizheng/next-wait-to-display
 * description: Wait element display in document.
 * url: https://github.com/afeiship/next-wait-to-display
 * version: 1.0.0
 * date: 2020-01-14 10:29:28
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');

  nx.waitToDisplay = function(inSelector, inDelay, inCallback) {
    var el = document.querySelector(inSelector);
    if (el != null) {
      return inCallback(el);
    } else {
      setTimeout(function() {
        nx.waitToDisplay(inSelector, inDelay, inCallback);
      }, inDelay);
    }
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.waitToDisplay;
  }
})();

//# sourceMappingURL=next-wait-to-display.js.map
