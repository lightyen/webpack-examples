export interface WebWorker {
	new (): Worker
}
export default {} as WebWorker

const webWorker = (self as unknown) as DedicatedWorkerGlobalScope
webWorker.onmessage = function (e) {
	const workerResult = "Result: " + e.data[0] * e.data[1]
	webWorker.postMessage(workerResult)
	webWorker.close()
}
