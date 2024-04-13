import { useLocation, useNavigate } from 'react-router-dom'

const Search = ({ isVisibleInput, HiddenSearch }) => {
	const navigate = useNavigate()

	const location = useLocation()
	const queryParams = new URLSearchParams(location.search)
	const search = queryParams.get('search') || ''

	const handleKeyDown = e => {
		if (e.keyCode === 13) {
			queryParams.set('search', search)
			navigate({ search: queryParams.toString() })
		}
		return null
	}

	return (
		<div className={`relative flex-auto ${!isVisibleInput && 'hidden'}`}>
			<input
				type='text'
				className={'w-full focus:outline-none px-2 bg-gray-100 h-8'}
				placeholder={'Поиск'}
				onKeyDown={handleKeyDown}
			/>
			<div
				className={'absolute top-1/2 -translate-y-1/2 right-1 w-6 h-6'}
				onClick={HiddenSearch}
			>
				<div
					className={
						'w-6 h-0.5 bg-black absolute top-1/2 -translate-y-1/2 rotate-45'
					}
				></div>
				<div
					className={
						'w-6 h-0.5 bg-black absolute top-1/2 -translate-y-1/2 -rotate-45'
					}
				></div>
			</div>
		</div>
	)
}

export default Search
