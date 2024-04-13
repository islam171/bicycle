import { useLocation, useNavigate } from 'react-router-dom'

const Pagination = () => {
	const location = useLocation()
	const navigate = useNavigate()
	const queryParams = new URLSearchParams(location.search)
	const currentPage = Number(queryParams.get('page')) || 1
	const handlePage = newPage => {
		queryParams.set('page', newPage)
		navigate({ search: queryParams.toString() })
	}

	return (
		<div className={'flex w-full justify-center gap-5 my-5'}>
			<button
				disabled={currentPage === 1}
				onClick={() => handlePage(currentPage - 1)}
				className={'cursor-pointer'}
			>
				{'<<'}
			</button>
			<span>{currentPage}</span>
			<div
				onClick={() => handlePage(currentPage + 1)}
				className={'cursor-pointer'}
			>
				{'>>'}
			</div>
		</div>
	)
}

export default Pagination
