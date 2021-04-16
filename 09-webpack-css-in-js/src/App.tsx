import { ReactHTML, useState } from "react"
import { tw } from "twind"
import { css } from "twind/css"
import "@twind/macro"

export default function App() {
	return <DemoComponent />
}

interface CSSProp {
	css?: ReturnType<typeof css>
}

type MyAttributes<T extends keyof ReactHTML> = Omit<
	Exclude<Parameters<ReactHTML[T]>["0"], null | undefined>,
	"className"
> &
	CSSProp

function Container({ css, ...props }: MyAttributes<"div">) {
	return <div className={tw(tw`p-4`, css)} {...props} />
}

function Input({ css, ...props }: MyAttributes<"input">) {
	return (
		<input
			className={tw(
				tw`flex-1 appearance-none border border-transparent w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-md rounded-lg text-base text-red-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent`,
				css,
			)}
			{...props}
		/>
	)
}

function DemoComponent() {
	const [input, setInput] = useState("Webpack TypeScript Demo")
	const p = "500"
	return (
		<Container>
			<div
				tw={{
					"text-white": true,
				}}
			>
				Text
			</div>
			<Input spellCheck="false" onChange={e => setInput(e.target.value)} value={input} />
		</Container>
	)
}
