import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Pagination from '../../../features/Pagination/ui/Pagination'
import styles from './Directory.module.scss'
import { useLocation } from 'react-router-dom'
import { getBicycles } from '../../../entities/Bicycle/api'
import Heading from '../../../shared/ui/Heading/Heading'
import DirectoryByFilter from './DirectoryByFilter/DirectoryByFilter'
import DirectoryBicycle from './DirectoryBicycle/DirectoryBicycle'

const Catalog = () => {
	const dispatch = useDispatch()

	const location = useLocation()
	const queryParams = new URLSearchParams(location.search)
	const search = queryParams.get('search') || ''
	const order = queryParams.get('order') || ''
	const category = queryParams.get('category') || ''
	const sort = queryParams.get('sort') || ''
	const color = queryParams.get('color') || ''
	const material = queryParams.get('material') || ''
	const maxPrice = queryParams.get('maxPrice') || ''
	const minPrice = queryParams.get('minPrice') || ''
	const page = queryParams.get('page') || ''
	const limit = queryParams.get('limit') || ''

	useEffect(() => {
		dispatch(
			getBicycles({
				search,
				order,
				category,
				sort,
				color,
				material,
				maxPrice,
				minPrice,
				page,
				limit
			})
		)
	}, [
		dispatch,
		search,
		order,
		category,
		sort,
		color,
		material,
		maxPrice,
		minPrice,
		page,
		limit
	])

	return (
		<div className={styles.katalog}>
			<Heading>Каталог</Heading>
			<DirectoryByFilter />
			<DirectoryBicycle />
			<Pagination />
		</div>
	)
}
export default Catalog
