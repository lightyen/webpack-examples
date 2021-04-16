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
