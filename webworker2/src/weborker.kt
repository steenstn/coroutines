import org.w3c.dom.DedicatedWorkerGlobalScope
import org.w3c.dom.WorkerOptions
import org.w3c.workers.ServiceWorkerGlobalScope
import kotlin.math.sqrt

external val self: DedicatedWorkerGlobalScope

fun main() {
    println("in webworker")
    for (i in 0..1000000) {
        val y = sqrt(i.toDouble())
        for (j in 0..100000) {
            val x = sqrt(j.toDouble())
        }
    }
    self.postMessage("webworker done!")
}