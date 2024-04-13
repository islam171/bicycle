import RegisterForm from '../components/forms/RegisterForm'
import { Route, Routes } from 'react-router-dom'
import LoginForm from '../components/forms/LoginForm'

const Auth = () => {
	return (
		<>
			<Routes>
				<Route index element={<RegisterForm />} />
				<Route path={'/login'} element={<LoginForm />} />
			</Routes>
		</>
	)
}

export default Auth
