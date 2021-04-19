import { useEffect, useRef, useState } from "react"
import { apply, tw } from "twind"
import { css } from "twind/css"

const center = apply`absolute (right-1/2 transform translate-x-1/2)`

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

	const delay = 0
	const h = useRef<number>(0)

	function enter() {
		tw(show)
			.split(" ")
			.forEach(c => tooltipRef.current?.classList.add(c))
		h.current = window.setTimeout(() => {
			tw(anime)
				.split(" ")
				.forEach(c => tooltipRef.current?.classList.add(c))
		}, delay)
	}

	function leave() {
		window.clearTimeout(h.current)
		h.current = 0
		tw(anime)
			.split(" ")
			.forEach(c => tooltipRef.current?.classList.remove(c))
	}

	return (
		<span className={tw`relative`}>
			<span className={tw`hover:(underline cursor-default)`} onPointerEnter={enter} onPointerLeave={leave}>
				{text}
			</span>
			<div
				ref={tooltipRef}
				className={tw(tooltip)}
				onTransitionEnd={() => {
					// fade out
					if (h.current == 0) {
						tw(show)
							.split(" ")
							.forEach(c => tooltipRef.current?.classList.remove(c))
					}
				}}
			>
				{content}
			</div>
		</span>
	)
}
