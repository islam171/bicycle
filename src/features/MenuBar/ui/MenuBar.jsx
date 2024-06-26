import { useOpenMenu } from '../hooks/useOpenMenu'

const MenuBar = ({ children, title }) => {
	const { handleClick, sideBlock } = useOpenMenu()

	return (
		<>
			<div
				className={'relative border-b'}
				ref={sideBlock}
				onClick={handleClick}
			>
				<div className={'relative py-5 px-2'}>
					<div>{title}</div>
					<div className={'absolute top-1/2 right-5 w-2 h-2 -translate-y-1/2'}>
						<span
							className={
								'border-b-2 border-r-2  w-full h-full absolute border-black rotate-45'
							}
						></span>
					</div>
				</div>
				<div
					onClick={e => e.stopPropagation()}
					className={
						'px-2 py-2 text-xs hidden flex-col gap-3 transition-all delay-500'
					}
				>
					{children}
				</div>
			</div>
		</>
	)
}

export default MenuBar
