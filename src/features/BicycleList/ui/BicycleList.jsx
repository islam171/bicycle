import styles from './BicycleList.module.scss'
import Bicycle from '../../../entities/Bicycle/ui/Bicycle'

const BicycleList = ({ isLoading, error, bicycles }) => {
	return (
		<div className={styles.BicycleList}>
			{!isLoading ? (
				!error ? (
					bicycles &&
					bicycles.map(bike => <Bicycle key={bike._id} bike={bike} />)
				) : (
					<>{error.message}</>
				)
			) : (
				<>Загрузка...</>
			)}
		</div>
	)
}

export default BicycleList
