import { Link } from 'react-router-dom'
import { memo } from 'react'
import { addCart, removeCart } from '../../Cart'
import { useDispatch, useSelector } from 'react-redux'
import { BsFillCartFill } from 'react-icons/bs'
import { BsCartCheck } from 'react-icons/bs'
import styles from './Bicycle.module.scss'

const Bicycle = memo(({ bike }) => {
	const dispatch = useDispatch()

	const { token } = useSelector(state => state.user)
	const { carts } = useSelector(state => state.cart)
	const { isAdmin } = useSelector(state => state.admin)

	return (
		<>
			<div className={styles.bicycle}>
				<div className={styles.bicycle__img}>
					<img
						src={`http://localhost:3001${bike.image[0]}`}
						alt=''
						className={'h-full border-0'}
					/>
				</div>
				<div className={'h-10'}>
					<Link to={`/bicycle/${bike._id}`}>
						{bike.name.slice(0, 40).length < bike.name.length
							? bike.name.slice(0, 40) + '...'
							: bike.name}
					</Link>
				</div>
				<div className={'flex justify-between gap-5'}>
					<span className={'flex items-center'}>{bike.price} ₽</span>
					<div
						className={`w-10 h-10 border-r-4 flex items-center justify-center ${!isAdmin && 'hidden'}`}
						style={{ backgroundColor: '#1b2738' }}
					>
						{carts[bike._id] ? (
							<BsCartCheck
								style={{ color: 'white', fontSize: '24px' }}
								onClick={() => dispatch(removeCart({ token, bike }))}
							/>
						) : (
							<BsFillCartFill
								style={{ color: 'white', fontSize: '24px' }}
								onClick={() => dispatch(addCart({ token, bike }))}
							/>
						)}
					</div>
				</div>
			</div>
		</>
	)
})

export default Bicycle
