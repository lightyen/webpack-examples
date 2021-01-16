import { useState } from "react"
import { Global } from "@emotion/react"
import tw, { css, GlobalStyles } from "twin.macro"

export default function App() {
	return (
		<>
			<GlobalStyles />
			<Global
				styles={css`
					body {
						${tw`bg-gray-900`}
					}
				`}
			/>
			<DemoComponent />
		</>
	)
}

const Container = tw.div`p-4`

const Input = tw.input`flex-1 appearance-none border border-transparent w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-md rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent`

function DemoComponent() {
	const [input, setInput] = useState("Webpack TypeScript Demo")
	return (
		<Container>
			<Input
				spellCheck="false"
				css={css`
					max-width: 300px;
				`}
				onChange={e => setInput(e.target.value)}
				value={input}
			/>
		</Container>
	)
}
