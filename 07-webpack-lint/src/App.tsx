import "./index.css"
import { useState } from "react"
export default function DemoComponent() {
	const [input, setInput] = useState("Webpack TypeScript Demo")
	return <input spellCheck="false" onChange={e => setInput(e.target.value)} value={input} />
}
