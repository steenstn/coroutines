//importScripts("https://steenstn.github.io/coroutines/out/production/coroutines/lib/kotlin.js")
import kotlinx.coroutines.*
import org.w3c.dom.Worker
import org.w3c.dom.WorkerOptions
import kotlin.coroutines.suspendCoroutine
import kotlin.math.sqrt

 suspend fun main() {
     val worker = Worker("out/production/webworker2/webworker2.js")

   //  worker.postMessage("test")
    println("woop")

    GlobalScope.launch { slowMethod() }

     println("end of main")
}

 suspend fun slowMethod() = suspendCoroutine<Unit>  {
    for (i in 0..20000) {
        val y = sqrt(i.toDouble())
        for (j in 0..1000) {
            val x = sqrt(j.toDouble())

        }
    }
    println ( "End of slowMethod()")
}