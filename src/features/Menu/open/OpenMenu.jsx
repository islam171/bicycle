import { openSidebarMenu } from '../../../store/sidebarSlice'
import MenuIcon from '@mui/icons-material/Menu'
import { useDispatch } from 'react-redux'

const OpenMenuButton = () => {
	const dispatch = useDispatch()

	return (
		<div
			className={
				'h-full flex items-center gap-2 max-w-36 cursor-pointer max-md:w-10'
			}
			onClick={() => dispatch(openSidebarMenu())}
		>
			<MenuIcon />
			<div className={'font-bold tracking-tighter text-sm max-md:hidden'}>
				Меню
			</div>
		</div>
	)
}

export default OpenMenuButton
