import "./index.css"

// In React 17 with new JSX transform, we don't need to import React now.
// import React from "react"

// But you still have to import APIs when you need them.
import { useState } from "react"

// Don't export default anonymous function, or Fast Refresh won't work.
export default function DemoComponent() {
	const [input, setInput] = useState("Webpack TypeScript Demo")
	return <input spellCheck="false" onChange={e => setInput(e.target.value)} value={input} />
}
