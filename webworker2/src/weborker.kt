import org.w3c.workers.ServiceWorkerGlobalScope

external val self: ServiceWorkerGlobalScope

fun main() {
    js("console.log('test');")
    println("webwoerk")
    self.addEventListener("message", {event ->
        run {
            println("in listener")
        }
    })
}