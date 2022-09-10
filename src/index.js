(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  nx.waitToDisplay = function (inSelector, inDelay, inCallback, inTimeout) {
    var el = document.querySelector(inSelector);
    var timeoutFlag = false;

    setTimeout(function () {
      timeoutFlag = true;
    }, inTimeout || 10 * 100);

    if (el != null || timeoutFlag) {
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
