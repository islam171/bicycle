import { useEffect, useRef, useState } from 'react'

export const useSlider = ({ width, items }) => {
	const slider = useRef(null)
	const [prev, setPrev] = useState(false)
	const [next, setNext] = useState(false)

	const [currentIndex, setCurrentIndex] = useState(0)
	const colItem = 3
	const itemWidth = width / colItem
	const itemHeight = itemWidth * (9 / 16)

	useEffect(() => {
		slider.current.childNodes.forEach(element => {
			element.style = `transform: translate(-${currentIndex * itemWidth}px); min-width: ${itemWidth}px; min-height: ${itemHeight}`
		})
	}, [currentIndex, itemWidth, itemHeight])

	const prevHandler = () => {
		const isFirstSlide = currentIndex === 0
		const newIndex = isFirstSlide ? currentIndex : currentIndex - 1
		setNext(false)
		isFirstSlide ? setPrev(true) : setPrev(false)
		setCurrentIndex(newIndex)
	}
	const nextHandler = () => {
		const isLastSlide = currentIndex === items.length - colItem
		setPrev(false)
		const newIndex = isLastSlide ? currentIndex : currentIndex + 1
		isLastSlide ? setNext(true) : setPrev(false)
		setCurrentIndex(newIndex)
	}

	return { prev, next, nextHandler, prevHandler, slider, itemWidth, itemHeight }
}
