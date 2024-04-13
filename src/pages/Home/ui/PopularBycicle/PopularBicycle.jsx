import { useEffect, useState } from 'react'
import axios from 'axios'
import BicycleList from '../../../../features/BicycleList/ui/BicycleList'

const PopularBicycle = () => {
	const [bicycles, setBicycles] = useState([])
	const [error, setError] = useState(null)
	const [isLoading, setIsLoading] = useState(true)

	async function fetchBicycle() {
		try {
			const { data } = await axios.get(
				'http://localhost:3001/api/v1/bicycle?_limit=12'
			)
			setBicycles(data)
		} catch (e) {
			setError(e)
		} finally {
			setIsLoading(false)
		}
	}

	useEffect(() => {
		fetchBicycle()
	}, [])

	return (
		<div className={'mx-auto'} style={{ maxWidth: '764px' }}>
			<BicycleList bicycles={bicycles} isLoading={isLoading} error={error} />
		</div>
	)
}

export default PopularBicycle
