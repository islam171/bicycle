import styles from './Slider.module.scss'
import { useSlider } from '../hooks/useSlider'
import SliderItem from './SliderItem'

const Slider = ({ items, width }) => {
	const {
		prevHandler,
		nextHandler,
		slider,
		prev,
		next,
		itemWidth,
		itemHeight
	} = useSlider({
		items,
		width
	})

	return (
		<>
			<div className={styles.slider} style={{ width: `${width}px` }}>
				<button
					className={styles.slider__button}
					disabled={prev}
					onClick={prevHandler}
				>
					<div></div>
				</button>
				<div className={styles.slider__track} ref={slider}>
					{items.map((item, index) => (
						<SliderItem
							key={index}
							item={item}
							itemWidth={itemWidth}
							itemHeight={itemHeight}
						/>
					))}
				</div>
				<button
					className={styles.slider__button_right}
					disabled={next}
					onClick={nextHandler}
				>
					<div></div>
				</button>
			</div>
		</>
	)
}

export default Slider
