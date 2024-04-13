import { useSelector } from 'react-redux'
import { BicycleList } from '../../../../features/BicycleList'

const DirectoryBicycle = () => {
	const { bicycles, isLoading, error } = useSelector(state => state.bicycle)

	return (
		<div>
			<BicycleList bicycles={bicycles} isLoading={isLoading} error={error} />
		</div>
	)
}

export default DirectoryBicycle
