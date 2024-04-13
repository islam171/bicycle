import styles from './Slider.module.scss'

const SliderItem = ({ item, itemWidth, itemHeight }) => {
	return (
		<div
			className={styles.slider__item}
			style={{ minWidth: `${itemWidth}`, minHeight: `${itemHeight}` }}
		>
			<div className={styles.slider__body}>
				<img src={item.img} alt='' />
			</div>
		</div>
	)
}

export default SliderItem
