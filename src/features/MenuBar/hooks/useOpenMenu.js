import { useRef } from 'react'

export const useOpenMenu = () => {
	const sideBlock = useRef()

	const sideBlockHandler = i => {
		if (sideBlock.current.childNodes[1].classList.contains('hidden')) {
			sideBlock.current.childNodes[1].classList.remove('hidden')
			sideBlock.current.childNodes[1].classList.add('flex')
			sideBlock.current.childNodes[0].childNodes[1].classList.add('rotate-180')
		} else {
			sideBlock.current.childNodes[1].classList.add('hidden')
			sideBlock.current.childNodes[1].classList.remove('flex')
			sideBlock.current.childNodes[0].childNodes[1].classList.remove(
				'rotate-180'
			)
		}
	}
	const handleClick = e => {
		let element = sideBlock.current
		if (element && element.contains(e.target)) {
			sideBlockHandler()
		}
	}

	return { handleClick, sideBlock }
}
