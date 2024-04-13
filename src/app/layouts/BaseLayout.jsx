import { Outlet } from 'react-router-dom'
import SideBarMenu from '../../widgets/Sidebars/ui/SideBarMenu'
import SideBarFilter from '../../widgets/Sidebars/ui/SideBarFilter'
import AdminSideBarFilter from '../../pages/Admin/AdminSideBarFilter'
import { Header } from '../../widgets/Header'
import { Footer } from '../../widgets/Footer'

const Layout = () => {
	return (
		<div
			className={
				'max-w-screen-xl mx-auto my-0 min-h-full flex flex-col max-xl:px-5 relative'
			}
		>
			<Header />
			<div className={'flex-auto'}>
				<Outlet />
			</div>
			<Footer />
			<SideBarMenu />
			<SideBarFilter />
			<AdminSideBarFilter />
		</div>
	)
}

export default Layout
