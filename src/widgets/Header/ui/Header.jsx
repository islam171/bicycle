import OpenMenuButton from '../../../features/Menu/open/OpenMenu'
import { Search } from '../../../features/Search'
import Title from '../../../shared/ui/Title/Title'
import Navigation from './Navigation/Navigation'
import { useState } from 'react'
import { Breadcrumbs } from '../../../features/Breadcrumbs'

const Header = () => {
	const [isVisibleInput, SetIsVisibleInput] = useState(false)
	const ShowSearch = () => {
		!isVisibleInput && SetIsVisibleInput(true)
	}
	const HiddenSearch = e => {
		isVisibleInput && SetIsVisibleInput(false)
		e.target.value = ''
	}

	return (
		<div>
			<div className='flex h-14 justify-between items-center gap-2'>
				<OpenMenuButton />
				<Search isVisibleInput={isVisibleInput} HiddenSearch={HiddenSearch} />
				{!isVisibleInput && <Title />}
				<Navigation isVisibleInput={isVisibleInput} ShowSearch={ShowSearch} />
			</div>
			<Breadcrumbs />
		</div>
	)
}

export default Header
