import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../../../../store/userSlice'
import { logoutAdmin } from '../../../../store/adminSlice'
import { useDispatch, useSelector } from 'react-redux'

const ProfileNavLink = () => {
	const { isAdmin } = useSelector(state => state.admin)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	return (
		<div className={'w-56 flex flex-col gap-1'}>
			<Link className={'hover:underline'} to={'/profile'}>
				Личный кабинет
			</Link>
			<Link className={'hover:underline'} to={'story'}>
				История заказов
			</Link>
			<Link className={'hover:underline'} to={'address'}>
				Адреса доставки
			</Link>
			{isAdmin && (
				<Link className={'hover:underline'} to={'/admin'}>
					Админка
				</Link>
			)}
			<div
				onClick={() => {
					dispatch(logout())
					dispatch(logoutAdmin())
					navigate('/auth/login')
				}}
				className={'hover:underline cursor-pointer'}
			>
				Выход
			</div>
		</div>
	)
}

export default ProfileNavLink
