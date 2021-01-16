import DemoWorker from "./demo.worker"
const worker = new DemoWorker()
worker.onmessage = function (e) {
	const el = document.getElementById("root")
	if (el) {
		el.innerHTML = `<div>${e.data}</div>`
	}
}
worker.postMessage([20, 21])
