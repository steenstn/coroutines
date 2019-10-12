importScripts("https://steenstn.github.io/coroutines/out/production/coroutines/lib/kotlin.js")
if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'webworker2'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'webworker2'.");
}
var webworker2 = function (_, Kotlin) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var Unit = Kotlin.kotlin.Unit;
  function main$lambda(event) {
    println('in listener');
    return Unit;
  }
  function main() {
    console.log('test');
    importScripts('out/production/coroutines/lib/kotlin.js');
    println('webwoerk');
    self.addEventListener('message', main$lambda);
  }
  _.main = main;
  main();
  Kotlin.defineModule('webworker2', _);
  return _;
}(typeof webworker2 === 'undefined' ? {} : webworker2, kotlin);
