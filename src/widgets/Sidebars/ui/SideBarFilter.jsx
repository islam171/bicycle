import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeSidebarFilter } from '../../../store/sidebarSlice'
import MenuBar from '../../../features/MenuBar/ui/MenuBar'
import CustomInput from '../../../components/Inputs/CustomInput'
import CheckIcon from '@mui/icons-material/Check'
import { fetchPackage } from '../../../store/array/packageSlice'
import { fetchMaterial } from '../../../store/array/mateiralSlice'
import { fetchCategory } from '../../../store/array/categorySlice'
import SidebarHeaderMobile from './SidebarHeaderMobile'
import { fetchColor } from '../../../store/array/colorSlice'
import { fetchPrice } from '../../../store/array/pricaSlice'
import { useClickOutside } from '../../../hooks/useClickOutside'
import { useLocation, useNavigate } from 'react-router-dom'

const SideBarFilter = () => {
	const { isOpenSidebarFilter } = useSelector(state => state.sideBar)
	const dispatch = useDispatch()

	//Filter
	const { materials } = useSelector(state => state.material)
	const { colors } = useSelector(state => state.color)
	const { categories } = useSelector(state => state.category)

	useEffect(() => {
		dispatch(fetchCategory())
		dispatch(fetchColor())
		dispatch(fetchMaterial())
		dispatch(fetchPrice())
		dispatch(fetchPackage())
	}, [dispatch])

	const SideBarRef = useRef(null)
	useClickOutside(SideBarRef, () => {
		dispatch(closeSidebarFilter())
	})

	const location = useLocation()
	const navigate = useNavigate()
	const queryParams = new URLSearchParams(location.search)
	const category = queryParams.get('category') || ''
	const color = queryParams.get('color') || ''
	const material = queryParams.get('material') || ''

	const clearFilter = () => {
		queryParams.set('search', '')
		queryParams.set('order', '')
		queryParams.set('sort', '')
		queryParams.set('category', '')
		queryParams.set('material', '')
		queryParams.set('maxPrice', '')
		queryParams.set('minPrice', '')
		queryParams.set('page', '')
		queryParams.set('limit', '')
		navigate({ search: queryParams.toString() })
	}

	return (
		<div ref={SideBarRef}>
			<div
				className={`fixed top-0 left-0 w-96 overflow-y-scroll overflow-x-hidden h-screen bg-white transition-all delay-75 max-md:w-full ${!isOpenSidebarFilter && '-translate-x-full'} z-20 `}
			>
				<SidebarHeaderMobile sidebar={'filter'} />
				<div className={'px-3 pb-5 h-full'}>
					<div className={'flex flex-col h-full'}>
						<div className={'border-b-2 flex justify-between'}>
							<h1 className={'py-5 font-semibold text-2xl'}>Фильтры</h1>
							<button onClick={() => clearFilter()}>Сброс</button>
						</div>
						<div className={'border-b'}>
							<MenuBar title={'Цена'}>
								<CustomInput />
							</MenuBar>
						</div>
						<div className={'border-b'}>
							<MenuBar title={'Тип'}>
								<div className={'flex flex-col gap-5'}>
									<div
										className={
											'flex text-base items-center gap-2 cursor-pointer'
										}
									>
										<span className={'w-6 h-6 bg-gray-300 relative '}>
											{category === '' ? (
												<CheckIcon className={'absolute top-0 right-0'} />
											) : (
												''
											)}
										</span>
										Все
									</div>
									{categories &&
										categories.map(cat => (
											<div
												key={cat._id}
												className={
													'flex text-base items-center gap-2 cursor-pointer'
												}
											>
												<span className={'w-6 h-6 bg-gray-300 relative'}>
													{cat._id === category ? (
														<CheckIcon className={'absolute top-0 right-0'} />
													) : (
														''
													)}
												</span>
												{cat.name}
											</div>
										))}
								</div>
							</MenuBar>
						</div>
						<div className={'border-b'}>
							<MenuBar title={'Цвет'}>
								<div className={'flex flex-col gap-5'}>
									<div
										className={
											'flex text-base items-center gap-2 cursor-pointer'
										}
									>
										<span className={'w-6 h-6 bg-gray-300 relative'}>
											{color === '' ? (
												<CheckIcon className={'absolute top-0 right-0'} />
											) : (
												''
											)}
										</span>
										Все
									</div>
									{colors &&
										colors.map(col => (
											<div
												key={col._id}
												className={
													'flex text-base items-center gap-2 cursor-pointer'
												}
											>
												<span className={'w-6 h-6 bg-gray-300 relative'}>
													{col._id === color ? (
														<CheckIcon className={'absolute top-0 right-0'} />
													) : (
														''
													)}
												</span>
												{col.name}
											</div>
										))}
								</div>
							</MenuBar>
						</div>
						<div className={'border-b'}>
							<MenuBar title={'Материал'}>
								<div className={'flex flex-col gap-5'}>
									<div
										className={
											'flex text-base items-center gap-2 cursor-pointer'
										}
									>
										<span className={'w-6 h-6 bg-gray-300 relative'}>
											{material === '' ? (
												<CheckIcon className={'absolute top-0 right-0'} />
											) : (
												''
											)}
										</span>
										Все
									</div>
									{materials &&
										materials.map(mat => (
											<div
												key={mat._id}
												className={
													'flex text-base items-center gap-2 cursor-pointer'
												}
											>
												<span className={'w-6 h-6 bg-gray-300 relative'}>
													{mat._id === material ? (
														<CheckIcon className={'absolute top-0 right-0'} />
													) : (
														''
													)}
												</span>
												{mat.name}
											</div>
										))}
								</div>
							</MenuBar>
						</div>
						<div className={'flex-auto'}></div>
					</div>
				</div>
				<div
					className={
						'fixed top-5 bg-white z-30 rounded-full w-10 h-10 flex items-center justify-center max-md:hidden transition-all delay-500'
					}
					style={{ left: 400 }}
					onClick={() => dispatch(closeSidebarFilter())}
				>
					<div className={'w-6 h-6 relative z-30'}>
						<span
							className={
								'w-full h-0.5 absolute top-1/2 right-0 rotate-45 -translate-y-1/2 bg-black'
							}
							style={{ height: '0.5px' }}
						></span>
						<span
							className={
								'w-full h-0.5 absolute top-1/2 right-0 -rotate-45 -translate-y-1/2 bg-black'
							}
							style={{ height: '0.5px' }}
						></span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SideBarFilter
