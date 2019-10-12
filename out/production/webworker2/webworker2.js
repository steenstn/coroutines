importScripts("https://steenstn.github.io/coroutines/out/production/coroutines/lib/kotlin.js")
if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'webworker2'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'webworker2'.");
}
var webworker2 = function (_, Kotlin) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var Math_0 = Math;
  function main() {
    println('in webworker');
    for (var i = 0; i <= 1000000; i++) {
      var y = Math_0.sqrt(i);
      for (var j = 0; j <= 100000; j++) {
        var x = Math_0.sqrt(j);
      }
    }
    self.postMessage('webworker done!');
  }
  _.main = main;
  main();
  Kotlin.defineModule('webworker2', _);
  return _;
}(typeof webworker2 === 'undefined' ? {} : webworker2, kotlin);
