import styles from './Home.module.scss'
import PopularBicycle from './PopularBycicle/PopularBicycle'
import ShowAllButton from './ShowAllButton/ShowAllButton'

const Home = () => {
	return (
		<div className={styles.Home}>
			<PopularBicycle />
			<ShowAllButton />
		</div>
	)
}
export default Home
