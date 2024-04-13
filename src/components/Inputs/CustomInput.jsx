import Slider from 'react-slider'
import { useLocation, useNavigate } from 'react-router-dom'

const CustomInput = () => {
	const location = useLocation()
	const navigate = useNavigate()

	const queryParams = new URLSearchParams(location.search)

	const maxPrice = Number(queryParams.get('maxPrice')) || 0
	const minPrice = Number(queryParams.get('minPrice')) || 0

	const onSetPrice = array => {
		queryParams.set('minPrice', array[0])
		queryParams.set('maxPrice', array[1])
		navigate({ search: queryParams.toString() })
	}

	return (
		<>
			<div className={'w-full my-2'}>
				<Slider
					className={'slider'}
					onChange={onSetPrice}
					value={[minPrice, maxPrice]}
					min={100000}
					max={100}
				/>
				<div className={'flex justify-between gap-2 w-full'}>
					<input
						className={'p-2 border slider-input flex-auto'}
						onChange={e => onSetPrice([e.target.value, maxPrice])}
						value={minPrice}
						type='text'
					/>
					<span className={'flex justify-center items-center'}>-</span>
					<input
						className={'p-2 border slider-input flex-auto'}
						onChange={e => onSetPrice([minPrice, e.target.value])}
						value={maxPrice}
						type='text'
					/>
				</div>
			</div>
		</>
	)
}

export default CustomInput
