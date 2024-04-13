import { openSidebarFilter } from '../../../../store/sidebarSlice'
import TuneIcon from '@mui/icons-material/Tune'
import { Order } from '../../../../features/Order'
import { Sort } from '../../../../features/Sort/'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

const DirectoryByFilter = () => {
	const dispatch = useDispatch()

	const [isOpenSort, setIsOpenSort] = useState(false)
	const openSort = () => {
		setIsOpenSort(prev => !prev)
	}

	const [isOpenOrder, setIsOpenOrder] = useState(false)
	const openOrder = () => {
		setIsOpenOrder(prev => !prev)
	}

	const location = useLocation()
	const queryParams = new URLSearchParams(location.search)
	const order = queryParams.get('order') || ''
	const sort = queryParams.get('sort') || ''

	return (
		<div className={'flex justify-between my-5'}>
			<div
				className={'flex gap-3 cursor-pointer'}
				onClick={() => dispatch(openSidebarFilter())}
			>
				<div>
					<TuneIcon />
				</div>
				<div>Фильтры</div>
			</div>
			<div className={'flex gap-3 relative'}>
				<Order
					openOrder={openOrder}
					isOpenOrder={isOpenOrder}
					order={order}
					sort={sort}
				/>
				<Sort isOpenSort={isOpenSort} openSort={openSort} sort={sort} />
			</div>
		</div>
	)
}

export default DirectoryByFilter
