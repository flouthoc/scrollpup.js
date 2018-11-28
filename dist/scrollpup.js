(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.scrollpup = factory());
}(this, (function () { 'use strict';

  var ScrollPup = function ScrollPup (opts) {
    var this$1 = this;

    var defaults = {
      background: 'linear-gradient(to right, #36d1dc, #5b86e5)',
      height: '10px'
    };

    Object.assign(this, defaults);
    Object.assign(this, opts);

    this.init = false;

    window.addEventListener('scroll', function (e) { return this$1.run(this$1); });
  };

  ScrollPup.prototype.run = function run (opts) {
    if (!this.init) {
      var scrollbar$1 = document.createElement('div');
      scrollbar$1.classList = 'scroll-pup';
      document.body.appendChild(scrollbar$1);

      this.init = true;
    }

    var scrollbar = document.querySelector('.scroll-pup');
    var fullPage = document.documentElement;
    var fullBody = document.body;
    var percent = Math.floor((fullPage['scrollTop'] || fullBody['scrollTop']) / ((fullPage['scrollHeight'] || fullBody['scrollHeight']) - fullPage.clientHeight) * 100);

    scrollbar.style.height = opts.height;
    scrollbar.style.background = opts.background;
    scrollbar.style.width = percent + '%';
    scrollbar.style.position = 'fixed';
    scrollbar.style.top = 0;
    scrollbar.style.right = 0;
    scrollbar.style.left = 0;
  };

  var scrollpup = function (opts) { return new ScrollPup(opts); };

  return scrollpup;

})));
