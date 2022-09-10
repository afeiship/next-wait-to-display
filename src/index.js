(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  nx.waitToDisplay = function (inSelector, inDelay, inCallback, inTimes) {
    var el = document.querySelector(inSelector);
    var times = inTimes === undefined ? 10000 : inTimes;
    if (el != null) {
      return inCallback(el);
    } else {
      if (times > 0) {
        times--;
        setTimeout(function () {
          nx.waitToDisplay(inSelector, inDelay, inCallback, times);
        }, inDelay);
      }
    }
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.waitToDisplay;
  }
})();
