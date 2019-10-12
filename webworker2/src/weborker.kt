import org.w3c.workers.ServiceWorkerGlobalScope

external val self: ServiceWorkerGlobalScope

fun main() {
    println("webwoerk")
    self.addEventListener("message", {event ->
        run {
            println("in listener")
        }
    })
}