import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setMakingCart } from '../store/makingSlice'
import { useEffect, useMemo } from 'react'
import { CartItem, getCart } from '../entities/Cart'

const Cart = () => {
	const navigate = useNavigate()
	const Making = () => {
		dispatch(setMakingCart({ carts, totalPrice }))
		navigate('/making')
	}

	const { carts, status, totalCount, totalPrice } = useSelector(
		state => state.cart
	)
	const { token } = useSelector(state => state.user)

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getCart(token))
	}, [token])

	return (
		<>
			<div className={''}>
				<h1 className={'text-2xl'}>Корзина</h1>
				<div className={'flex gap-5 mt-3 max-lg:flex-col'}>
					{carts.length > 0 && (
						<>
							<div
								className={'flex flex-col gap-7'}
								style={{ flex: '1 1 auto' }}
							>
								{carts.map(item => (
									<CartItem
										cart={item}
										key={item._id}
										dispatch={dispatch}
										status={status}
									/>
								))}
							</div>
							<div className={'max-w-sm max-lg:max-w-full'}>
								<div className={''}>
									<div className={'p-5 bg-cyan-100'}>
										<div className={'flex justify-between text-lg'}>
											<div>Товары ({totalCount})</div>
											<div>{totalPrice} тг</div>
										</div>
									</div>
									<button
										className={'bg-blue-950 w-full p-3 text-xl text-white'}
										onClick={Making}
									>
										Оформить заказ
									</button>
								</div>
							</div>
						</>
					)}
				</div>
			</div>
		</>
	)
}

export default Cart
