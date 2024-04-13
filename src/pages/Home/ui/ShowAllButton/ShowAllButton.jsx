import styles from './ShowAllButton.module.scss'
import { Link } from 'react-router-dom'

const ShowAllButton = () => {
	return (
		<div className={styles.ShowAllButton}>
			<Link to={'Katalog'} className={'text-xl'}>
				Смотреть все
			</Link>
			<div
				className={
					'w-2 h-2 border-b-black border-b border-r border-r-black -rotate-45 translate-y-1'
				}
			></div>
		</div>
	)
}

export default ShowAllButton
