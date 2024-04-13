import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import CheckIcon from '@mui/icons-material/Check'
import { useState } from 'react'
import { updateBicyclesAdmin } from '../../../store/adminSlice'
import { useParams } from 'react-router-dom'
import MenuBar from '../../../features/MenuBar/ui/MenuBar'

const UpdateBicycleForm = () => {
	const dispatch = useDispatch()
	const { id } = useParams()

	const { token } = useSelector(state => state.user)
	const { bicycles } = useSelector(state => state.admin)

	const bicycle = bicycles.filter(bike => bike._id === id)[0]

	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { register, handleSubmit, setValue } = useForm({
		defaultValues: {
			name: bicycle.name,
			price: bicycle.price,
			description: bicycle.description,
			categoryId: '',
			packages: [],
			frameMaterialId: '',
			colorId: '',
			WheelDiameter: bicycle.WheelDiameter,
			SpeedsNumber: bicycle.SpeedsNumber,
			frameSize: bicycle.frameSize,
			image: {},
			modelYear: bicycle.modelYear,
			folding: bicycle.folding,
			seat: bicycle.seat
		},
		mode: 'onChange'
	})

	const onSubmit = values => {
		values.packages = packag
		dispatch(updateBicyclesAdmin({ id, data: values, token }))
	}

	const { categories } = useSelector(state => state.category)
	const { colors } = useSelector(state => state.color)
	const { materials } = useSelector(state => state.material)
	const { packages } = useSelector(state => state.package)
	const [material, setMaterial] = useState(bicycle.frameMaterialId)
	const [color, setColor] = useState(bicycle.colorId)
	const [packag, setPackag] = useState([])
	const [category, setCategory] = useState(bicycle.categoryId)

	const setPackageState = value => {
		if (!packag.includes(value)) {
			setPackag(prev => [...prev, value])
		} else {
			setPackag(prev =>
				prev.filter(n => {
					return n !== value
				})
			)
		}
	}

	return (
		<div>
			<div className={'my-5 text-2xl font-medium'}>
				Вход в кабинет покупателя
			</div>
			<form action='' onSubmit={handleSubmit(onSubmit)} className={'max-w-xl'}>
				<label htmlFor='name'>Названия</label>
				<input
					type={'text'}
					name={'name'}
					{...register('name', { required: 'Укажите имя продукта' })}
					className={
						'border-2 border-gray-800 transition delay-50 h-12 w-full mb-5 p-2 focus:outline-none focus:border-slate-300 focus:shadow-slate-300'
					}
				/>
				<br />
				<label htmlFor='price'>Цена</label>
				<input
					type={'number'}
					name={'price'}
					{...register('price', { required: 'Укажите цену' })}
					className={
						'border-2 border-gray-800 transition delay-50 h-12 w-full mb-5 p-2 focus:outline-none focus:border-slate-300 focus:shadow-slate-300'
					}
				/>
				<br />
				<label htmlFor='description'>Описание</label>
				<input
					type={'text'}
					name={'description'}
					{...register('description', { required: 'Укажите цену' })}
					className={
						'border-2 border-gray-800 transition delay-50 h-12 w-full mb-5 p-2 focus:outline-none focus:border-slate-300 focus:shadow-slate-300'
					}
				/>
				<br />
				<div className={'mb-5 border-2 border-gray-800 transition delay-50'}>
					<MenuBar title={'Тип'}>
						<div className={'flex flex-col gap-5'}>
							{categories &&
								categories.map(cat => (
									<div
										key={cat._id}
										onClick={() => {
											setValue('categoryId', cat._id)
											setCategory(cat._id)
										}}
										className={'flex text-base items-center gap-2'}
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
				<div className={'mb-5 border-2 border-gray-800 transition delay-50'}>
					<MenuBar title={'Комплектации'}>
						<div className={'flex flex-col gap-5'}>
							{packages &&
								packages.map(pack => (
									<div
										key={pack._id}
										onClick={() => {
											setPackageState(pack._id)
										}}
										className={'flex text-base items-center gap-2'}
									>
										<span className={'w-6 h-6 bg-gray-300 relative'}>
											{packag.includes(pack._id) ? (
												<CheckIcon className={'absolute top-0 right-0'} />
											) : (
												''
											)}
										</span>
										{pack.name}
									</div>
								))}
						</div>
					</MenuBar>
				</div>
				<div className={'mb-5 border-2 border-gray-800 transition delay-50'}>
					<MenuBar title={'Материал'}>
						<div className={'flex flex-col gap-5'}>
							{materials &&
								materials.map(mat => (
									<div
										key={mat._id}
										onClick={() => {
											setValue('frameMaterialId', mat._id)
											setMaterial(mat._id)
										}}
										className={'flex text-base items-center gap-2'}
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
				<div className={'mb-5 border-2 border-gray-800 transition delay-50'}>
					<MenuBar title={'Цвет'}>
						<div className={'flex flex-col gap-5'}>
							{colors &&
								colors.map(col => (
									<div
										key={col._id}
										onClick={() => {
											setValue('colorId', col._id)
											setColor(col._id)
										}}
										className={'flex text-base items-center gap-2'}
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

				<label htmlFor='image'>Изображения</label>
				<input
					type={'file'}
					accept={'image/*'}
					multiple
					{...register('image', { required: 'Укажите цену' })}
					className={
						'transition delay-50 h-12 w-full mb-5 py-1 focus:outline-none focus:border-slate-300 focus:shadow-slate-300'
					}
				/>
				<br />

				<label htmlFor='modelYear'>Год выпуска</label>
				<input
					type={'number'}
					name={'modelYear'}
					{...register('modelYear', { required: 'Укажите цену' })}
					className={
						'border-2 border-gray-800 transition delay-50 h-12 w-full mb-5 p-2 focus:outline-none focus:border-slate-300 focus:shadow-slate-300'
					}
				/>
				<br />
				<label htmlFor='frameSize'>Размер рамы</label>
				<input
					type={'number'}
					name={'frameSize'}
					{...register('frameSize', { required: 'Укажите цену' })}
					className={
						'border-2 border-gray-800 transition delay-50 h-12 w-full mb-5 p-2 focus:outline-none focus:border-slate-300 focus:shadow-slate-300'
					}
				/>
				<br />
				<label htmlFor='SpeedsNumber'>Количество передач</label>
				<input
					type={'number'}
					name={'SpeedsNumber'}
					{...register('SpeedsNumber', { required: 'Укажите цену' })}
					className={
						'border-2 border-gray-800 transition delay-50 h-12 w-full mb-5 p-2 focus:outline-none focus:border-slate-300 focus:shadow-slate-300'
					}
				/>
				<br />
				<label htmlFor='WheelDiameter'>Диаметр колес</label>
				<input
					type={'number'}
					name={'WheelDiameter'}
					{...register('WheelDiameter', { required: 'Укажите цену' })}
					className={
						'border-2 border-gray-800 transition delay-50 h-12 w-full mb-5 p-2 focus:outline-none focus:border-slate-300 focus:shadow-slate-300'
					}
				/>
				<br />
				<label htmlFor='folding'>Сидение</label>
				<input
					type={'checkbox'}
					name={'folding'}
					{...register('folding')}
					className={
						'border-2 border-gray-800 transition delay-50 m-3 p-2 focus:outline-none focus:border-slate-300 focus:shadow-slate-300'
					}
				/>
				<br />
				<label htmlFor='Seat'>Складной</label>
				<input
					type={'checkbox'}
					name={'Seat'}
					{...register('Seat')}
					className={
						'border-2 border-gray-800 transition delay-50 m-3 p-2 focus:outline-none focus:border-slate-300 focus:shadow-slate-300'
					}
				/>
				<br />
				<button
					type='submit'
					className={'p-2 px-4 text-white text-xl mt-5 '}
					style={{ backgroundColor: '#1b2738' }}
				>
					Изменить
				</button>
				<br />
			</form>
		</div>
	)
}

export default UpdateBicycleForm
