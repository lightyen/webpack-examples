import "@twind/macro"
import { TW } from "twind"

declare module "react" {
	interface DOMAttributes {
		tw?: Parameters<TW>[0]
	}
}
