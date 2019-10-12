//importScripts("https://steenstn.github.io/coroutines/out/production/coroutines/lib/kotlin.js")
import kotlinx.coroutines.*
import org.w3c.dom.Worker
import org.w3c.dom.WorkerOptions
import kotlin.coroutines.suspendCoroutine
import kotlin.math.sqrt

  fun main() {
    val worker = Worker("out/production/webworker2/webworker2.js")
    worker.onmessage = {e -> println(e.data)}



     println("end of main")
}
