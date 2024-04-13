import {
	createBrowserRouter,
	createRoutesFromElements,
	Route
} from 'react-router-dom'

import Order from '../pages/Order'
import { SinglePage } from '../pages/SinglePage'
import Making from '../pages/Making'
import Cart from '../pages/Cart'
import Auth from '../pages/Auth'
import Admin from '../pages/Admin/Admin'
import BaseLayout from './layouts/BaseLayout'
import { HomePage } from '../pages/Home'
import { Profile } from '../pages/Profile'
import { Directory } from '../pages/Kotalog/index'

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route element={<BaseLayout />}>
			<Route index element={<HomePage />} />
			<Route path='/katalog' element={<Directory />} />
			<Route path='/order/:id' element={<Order />} />
			<Route path='/bicycle/:id' element={<SinglePage />} />
			<Route path='/making' element={<Making />} />
			<Route path='/cart' element={<Cart />} />
			<Route path='/auth/*' element={<Auth />} />
			<Route path='/profile/*' element={<Profile />} />
			<Route path='/admin/*' element={<Admin />} />
		</Route>
	)
)

export default router
