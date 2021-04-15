import { render } from "react-dom"
import { StrictMode } from "react"
import App from "./App"
import { apply, setup } from "twind"
import { css } from "twind/css"

setup({
	preflight: (preflight, { theme }) =>
		css`
			${preflight}

			body {
				${apply`bg-gray-800`};
			}
		`,
})

render(
	<StrictMode>
		<App />
	</StrictMode>,
	document.getElementById("root"),
)
