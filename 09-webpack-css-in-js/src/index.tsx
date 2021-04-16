import { render } from "react-dom"
import { StrictMode } from "react"
import "../twind.config"
import App from "./App"
render(
	<StrictMode>
		<App />
	</StrictMode>,
	document.getElementById("root"),
)
