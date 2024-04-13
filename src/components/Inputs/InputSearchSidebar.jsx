import { useDispatch, useSelector } from 'react-redux'
import { toggleInputSidebar } from '../../store/sidebarSlice'

const InputSearchSidebar = () => {
	const { isOpenInputSidebar } = useSelector(state => state.sideBar)
	const dispatch = useDispatch()

	return (
		<>
			<div
				className={`${!isOpenInputSidebar && 'hidden'} w-full h-full bg-gray-100 flex transition-all delay-700 p-2`}
			>
				<div
					className={'w-10 h-10 relative'}
					onClick={() => dispatch(toggleInputSidebar())}
				>
					<span
						className={
							'w-full h-0.5 absolute top-1/2 right-0 rotate-45 -translate-y-1/2 bg-black'
						}
					></span>
					<span
						className={
							'w-full h-0.5 absolute top-1/2 right-0 -rotate-45 -translate-y-1/2 bg-black'
						}
					></span>
				</div>
				<input
					type='text'
					className={'bg-gray-100 w-full focus:outline-none px-2 z-20'}
					placeholder={'Поиск'}
				/>
			</div>
		</>
	)
}

export default InputSearchSidebar
