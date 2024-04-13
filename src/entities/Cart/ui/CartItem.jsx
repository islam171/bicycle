import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { addCart, deleteCart, removeCart } from '../index'
import { useSelector } from 'react-redux'

const CartItem = ({ cart, dispatch, status }) => {
	const { carts } = useSelector(state => state.cart)
	const { token } = useSelector(state => state.user)

	return (
		<>
			<div className={'flex gap-5 max-sm:gap-2'}>
				<div className={'flex items-center justify-center'}>
					<img
						src={`http://localhost:3001${cart.bicycle.image[0]}`}
						alt=''
						className={'w-48'}
					/>
				</div>
				<div className={'flex flex-col w-full justify-between'}>
					<div className={'flex w-full gap-5 max-sm:flex-col max-sm:gap-1'}>
						<div className={'max-w-xs overflow-hidden text-xl max-sm:text-sm'}>
							{cart.bicycle.name}
						</div>
						<div className={'flex-auto'}></div>
						<div className={'flex max-sm:order-3'}>
							<button
								className={`px-4 text-2xl h-7 flex items-center ${status !== 'loading' ? 'bg-slate-200' : 'bg-slate-100'}`}
								onClick={() =>
									status !== 'loading' &&
									dispatch(deleteCart({ token, bike: cart.bicycle }))
								}
							>
								-
							</button>
							<span className={'text-xl w-10 text-center h-7 bg-slate-200'}>
								{cart.count}
							</span>
							<button
								className={`px-4 text-2xl h-7 flex items-center ${status !== 'loading' ? 'bg-slate-200' : 'bg-slate-100'}`}
								onClick={() =>
									status !== 'loading' &&
									dispatch(
										addCart({
											token,
											bike: cart.bicycle
										})
									)
								}
							>
								+
							</button>
						</div>
						<div
							className={
								'text-xl font-semibold whitespace-nowrap  max-sm:text-base'
							}
						>
							{cart.bicycle.price * cart.count} тг
						</div>
					</div>
					<div>{cart.bicycle.price} P/шт</div>
				</div>
				<div>
					<DeleteOutlineIcon
						onClick={() => dispatch(removeCart({ token, bike: cart.bicycle }))}
					/>
				</div>
			</div>
		</>
	)
}

export default CartItem
