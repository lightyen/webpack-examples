import { useRef, RefObject } from "react"
import { apply, tw } from "twind"
import { css } from "twind/css"

const center = apply`absolute (right-1/2 transform translate-x-1/2) top-[99%]`

const hidden = apply`hidden opacity-0`

const tooltip = apply`
	${hidden}
	transition duration-200
	${center}
	whitespace-nowrap px-3 py-2 rounded bg-black text-gray-100
	${css`
		box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	`}
	`

const show = apply`block`

const anime = apply`opacity-90`

export default function Time({ content, text }: { content: string; text: string }) {
	const tooltipRef = useRef<HTMLDivElement>(null)

	const delay = 200
	const h = useRef<number>(0)
	const k = useRef<number>(0)

	function add(ref: RefObject<HTMLDivElement>, directive: ReturnType<typeof apply>) {
		tw(directive)
			.split(" ")
			.forEach(c => ref?.current?.classList.add(c))
	}

	function remove(el: RefObject<HTMLDivElement>, directive: ReturnType<typeof apply>) {
		tw(directive)
			.split(" ")
			.forEach(c => el.current?.classList.remove(c))
	}

	function enter() {
		window.clearTimeout(k.current)
		k.current = 0
		add(tooltipRef, show)
		h.current = window.setTimeout(() => {
			add(tooltipRef, anime)
		}, delay)
	}

	function leave() {
		window.clearTimeout(h.current)
		h.current = 0
		k.current = window.setTimeout(() => {
			remove(tooltipRef, anime)
		}, delay)
	}

	return (
		<time className={tw`relative hover:(cursor-default)`} onPointerEnter={enter} onPointerLeave={leave}>
			{text}
			<div
				ref={tooltipRef}
				className={tw(tooltip)}
				onTransitionEnd={() => {
					if (h.current == 0) {
						remove(tooltipRef, show)
					}
				}}
			>
				{content}
			</div>
		</time>
	)
}
