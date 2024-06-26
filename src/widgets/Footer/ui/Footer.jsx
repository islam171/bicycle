import TelegramIcon from '@mui/icons-material/Telegram'
import YouTubeIcon from '@mui/icons-material/YouTube'
import { Icon28LogoVkColor } from '@vkontakte/icons'
import React from 'react'
import { AiFillHome, AiOutlineHome } from 'react-icons/ai'
import { BiSolidUser, BiUser } from 'react-icons/bi'
import { BsCart, BsFillCartFill } from 'react-icons/bs'
import { FaListAlt, FaRegListAlt } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Link, Route, Routes } from 'react-router-dom'

const Footer = React.memo(({ onClick }) => {
	const { token } = useSelector(state => state.user)

	return (
		<div className={'h-10'} onClick={onClick}>
			<div className={'max-md:fixed w-full max-md:bottom-0 bg-white left-0'}>
				<div className={'max-md:hidden'}>
					<div className={'flex justify-between my-5'}>
						<div className={'text-xl font-light w-96'}>												</div>
										<div className={'text-5xl mx-1'}>MONO</div>
						<div className={'flex gap-3 justify-end w-96'}>
							<Link to={'/'} className={'flex items-center'}>
								<TelegramIcon />
							</Link>
									<Link to={'/'} className={'flex items-center'}>
								<Icon28LogoVkColor />
							</Link>
							<Link to={'/'} className={'flex items-center'}>
								<YouTubeIcon />
							</Link>
						</div>
					</div>
				</div>
				<div className={'md:hidden flex justify-between py-2 px-4 '}>
					<Link to={'/'}>
						<Routes>
							<Route path='/' element={<AiFillHome size={20} />} />
							<Route path='/Katalog' element={<AiOutlineHome size={20} />} />
							<Route path='/cart' element={<AiOutlineHome size={20} />} />
							<Route path='/profile/*' element={<AiOutlineHome size={20} />} />
							<Route path='/auth/*' element={<AiOutlineHome size={20} />} />
						</Routes>
					</Link>
					<Link to={'Katalog'}>
						<Routes>
							<Route path='/Katalog' element={<FaListAlt size={20} />} />
							<Route path='/' element={<FaRegListAlt size={20} />} />
							<Route path='/profile/*' element={<FaRegListAlt size={20} />} />
							<Route path='/auth/*' element={<FaRegListAlt size={20} />} />
							<Route path='/cart' element={<FaRegListAlt size={20} />} />
						</Routes>
					</Link>
					<Link to={'cart'}>
						<Routes>
							<Route path='/cart' element={<BsFillCartFill size={20} />} />
							<Route path='/Katalog' element={<BsCart size={20} />} />
							<Route path='/profile/*' element={<BsCart size={20} />} />
							<Route path='/auth/*' element={<BsCart size={20} />} />
							<Route path='/' element={<BsCart size={20} />} />
						</Routes>
					</Link>
					<Link to={token ? '/profile/*' : '/auth/login'}>
						<Routes>
							<Route
								path={token ? '/profile/*' : '/auth/login'}
								element={<BiSolidUser size={20} />}
							/>
							<Route path='/auth/*' element={<BiSolidUser size={20} />} />
							<Route path='/' element={<BiUser size={20} />} />
							<Route path='/cart' element={<BiUser size={20} />} />
							<Route path='/Katalog' element={<BiUser size={20} />} />
						</Routes>
					</Link>
				</div>
			</div>
		</div>
	)
})

export default Footer
