import SearchIcon from '@mui/icons-material/Search'
import { Link } from 'react-router-dom'
import { RiAdminFill } from 'react-icons/ri'
import PersonIcon from '@mui/icons-material/Person'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { useSelector } from 'react-redux'

const Navigation = ({ isVisibleInput, ShowSearch }) => {
	const { isAdmin } = useSelector(state => state.admin)
	const { token } = useSelector(state => state.user)
	return (
		<div className={'h-full flex items-center max-w-36 justify-end'}>
			<nav className={'flex gap-4 max-md:hidden'}>
				{!isVisibleInput && (
					<div onClick={ShowSearch}>
						<SearchIcon />
					</div>
				)}
				{isAdmin && (
					<Link to={'/admin'}>
						<RiAdminFill size={24} />
					</Link>
				)}
				<Link to={token ? '/profile' : '/auth/login'}>
					<PersonIcon />
				</Link>
				<Link to={'/cart'}>
					<ShoppingCartIcon />
				</Link>
			</nav>
			<div className={'md:hidden'}>
				<Link to={token ? '/profile' : '/auth/login'}>
					<PersonIcon />
				</Link>
			</div>
		</div>
	)
}

export default Navigation
