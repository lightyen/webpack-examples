import "./index.css"
import { useState } from "react"
export default function DemoComponent() {
	const [input, setInput] = useState("Webpack TypeScript Demo")
	return (
		<div className="p-4">
			<input
				spellCheck="false"
				className="flex-1 appearance-none border border-transparent w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-md rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
				onChange={e => setInput(e.target.value)}
				value={input}
			/>
		</div>
	)
}
