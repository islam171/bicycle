import FilterListIcon from '@mui/icons-material/FilterList'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Sort = React.memo(({ openSort, isOpenSort, sort }) => {
	const location = useLocation()
	const navigate = useNavigate()
	const queryParams = new URLSearchParams(location.search)

	const handleSort = order => {
		queryParams.set('sort', order)
		navigate({ search: queryParams.toString() })
	}

	return (
		<>
			<div className={'flex gap-3 relative cursor-pointer'} onClick={openSort}>
				<div>Сортировка</div>
				<div>
					<FilterListIcon />
				</div>
				<div
					className={`absolute top-full right-0 w-40 text-sm shadow-md cursor-pointer z-10 ${!isOpenSort && 'hidden'}`}
				>
					<div
						className={`px-3 py-1 hover:bg-gray-100 ${sort === '_id' ? 'bg-gray-100' : 'bg-white'}`}
						onClick={() => handleSort('_id')}
					>
						По добовлению
					</div>
					<div
						className={`px-3 py-1 hover:bg-gray-100 ${sort === 'price' ? 'bg-gray-100' : 'bg-white'}`}
						onClick={() => handleSort('price')}
					>
						По цене
					</div>
					<div
						className={`px-3 py-1 hover:bg-gray-100 ${sort === 'name' ? 'bg-gray-100' : 'bg-white'}`}
						onClick={() => handleSort('name')}
					>
						По алфавиту
					</div>
				</div>
			</div>
		</>
	)
})

export default Sort
