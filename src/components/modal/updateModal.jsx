import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { updateCategory } from '../../store/array/categorySlice'
import { updateMaterial } from '../../store/array/mateiralSlice'
import { updateColor } from '../../store/array/colorSlice'
import { updatePackage } from '../../store/array/packageSlice'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import React from 'react'

const UpdateModal = React.memo(({ closeModal, data, func, token }) => {
	const dispatch = useDispatch()

	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { register, handleSubmit } = useForm({
		defaultValues: {
			name: data.name
		},
		mode: 'onSubmit'
	})

	const onSubmit = values => {
		func === 'category' &&
			dispatch(updateCategory({ _id: data._id, token, values }))
		func === 'material' &&
			dispatch(updateMaterial({ _id: data._id, token, values }))
		func === 'color' && dispatch(updateColor({ _id: data._id, token, values }))
		func === 'package' &&
			dispatch(updatePackage({ _id: data._id, token, values }))
		closeModal()
	}

	return (
		<div className={'p-10 bg-white shadow-amber-400 relative'}>
			<AiOutlineCloseCircle
				className={'absolute top-2 right-2 cursor-pointer'}
				onClick={() => closeModal()}
			/>
			<div className={'my-5 text-2xl font-medium '}>
				Обновление
				{func === 'category' && <> Категории</>}
				{func === 'material' && <> Материала</>}
				{func === 'color' && <> Цвета</>}
				{func === 'package' && <> Комплетации</>}
			</div>
			<form onSubmit={handleSubmit(onSubmit)} className={'max-w-xl'}>
				<label htmlFor='name'>Названия</label>
				<input
					type={'text'}
					name={'name'}
					{...register('name', { required: 'Укажите имя' })}
					className={
						'border-2 border-gray-800 transition delay-50 h-12 w-full mb-5 p-2 focus:outline-none focus:border-slate-300 focus:shadow-slate-300'
					}
				/>
				<br />
				<input
					type='submit'
					className={'p-2 px-4 text-white text-xl mt-5 '}
					style={{ backgroundColor: '#1b2738' }}
				/>
				<br />
			</form>
		</div>
	)
})

export default UpdateModal
