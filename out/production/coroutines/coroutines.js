if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'coroutines'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'coroutines'.");
}
var coroutines = function (_, Kotlin) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var Unit = Kotlin.kotlin.Unit;
  function main$lambda(e) {
    println(e.data);
    return Unit;
  }
  function main() {
    var worker = new Worker('out/production/webworker2/webworker2.js');
    worker.onmessage = main$lambda;
    println('end of main');
  }
  _.main = main;
  main();
  Kotlin.defineModule('coroutines', _);
  return _;
}(typeof coroutines === 'undefined' ? {} : coroutines, kotlin);
