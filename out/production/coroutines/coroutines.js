if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'coroutines'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'coroutines'.");
}
if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
  throw new Error("Error loading module 'coroutines'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'coroutines'.");
}
var coroutines = function (_, Kotlin, $module$kotlinx_coroutines_core) {
  'use strict';
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var Unit = Kotlin.kotlin.Unit;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var internal = Kotlin.kotlin.coroutines.js.internal;
  var Math_0 = Math;
  var intercepted = Kotlin.kotlin.coroutines.intrinsics.intercepted_f9mg25$;
  var SafeContinuation_init = Kotlin.kotlin.coroutines.SafeContinuation_init_wj8d80$;
  function suspendCoroutine$lambda(closure$block) {
    return function (c) {
      var safe = SafeContinuation_init(intercepted(c));
      closure$block(safe);
      return safe.getOrThrow();
    };
  }
  function Coroutine$main$lambda($receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
  }
  Coroutine$main$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$main$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$main$lambda.prototype.constructor = Coroutine$main$lambda;
  Coroutine$main$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = slowMethod(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function main$lambda($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$main$lambda($receiver_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function main(continuation) {
    var worker = new Worker('out/production/webworker2/webworker2.js');
    worker.postMessage('test');
    println('woop');
    launch(coroutines.GlobalScope, void 0, void 0, main$lambda);
    println('end of main');
  }
  function slowMethod$lambda(it) {
    for (var i = 0; i <= 20000; i++) {
      var y = Math_0.sqrt(i);
      for (var j = 0; j <= 1000; j++) {
        var x = Math_0.sqrt(j);
      }
    }
    println('End of slowMethod()');
    return Unit;
  }
  function Coroutine$slowMethod(continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
  }
  Coroutine$slowMethod.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$slowMethod.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$slowMethod.prototype.constructor = Coroutine$slowMethod;
  Coroutine$slowMethod.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = suspendCoroutine$lambda(slowMethod$lambda)(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.result_0;
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function slowMethod(continuation_0, suspended) {
    var instance = new Coroutine$slowMethod(continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  _.main = main;
  _.slowMethod = slowMethod;
  main(internal.EmptyContinuation, false);
  Kotlin.defineModule('coroutines', _);
  return _;
}(typeof coroutines === 'undefined' ? {} : coroutines, kotlin, this['kotlinx-coroutines-core']);
