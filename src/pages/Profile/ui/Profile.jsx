import { Route, Routes, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Personal from './Personal/Personal'
import Story from './Story/Story'
import Address from './Address/Address'
import ProfileNavLink from './ProfileNavLink/ProfileNavLink'

const Profile = () => {
	const { token } = useSelector(state => state.user)

	if (token === '') {
		return <></>
	}

	return (
		<>
			<div className={'flex pt-10 max-sm:flex-col'}>
				<ProfileNavLink />
				<div className={'w-full'}>
					<Routes>
						<Route path={'/'} element={<Personal />} />
						<Route path={'/story'} element={<Story token={token} />} />
						<Route path={'/address'} element={<Address />} />
					</Routes>
				</div>
			</div>
		</>
	)
}

export default Profile
