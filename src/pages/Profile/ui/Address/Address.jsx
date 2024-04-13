import { useSelector } from 'react-redux'
import styles from './Address.module.scss'

const Address = () => {
	const { addresses } = useSelector(state => state.order)

	return (
		<div className={styles.address}>
			<div className={'text-lg my-1'}>Адреса доставки</div>
			<div className={styles.address__list}>
				{addresses.map(address => (
					<div key={address._id} className={styles.address__item}>
						<div>Страна</div>
						<div>{address.country}</div>
						<div>Город</div>
						<div>{address.city}</div>
						<div>Почтовый индекс</div>
						<div>{address.postcode}</div>
						<div>Улица</div>
						<div>{address.street}</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Address
