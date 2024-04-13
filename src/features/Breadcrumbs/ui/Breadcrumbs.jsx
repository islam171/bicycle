import { Link } from 'react-router-dom'
import styles from './Breadcrumbs.module.css'

const Breadcrumb = () => {
	const pathName = window.location.pathname

	const pathList = pathName.slice(1).split('/')

	return (
		<nav className={styles.Breadcrumb}>
			<ul>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<span>&nbsp;&gt;&nbsp;</span>
				{pathName !== '/' &&
					pathList.map(item => (
						<div key={item} className={styles.Breadcrumb__item}>
							<li>
								<Link to={item}>{item}</Link>
							</li>
							<span>&nbsp;&gt;&nbsp;</span>
						</div>
					))}
			</ul>
		</nav>
	)
}

export default Breadcrumb
