import Bicycle from "../../components/Bicycle/Bicycle";
import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import styles from './Home.module.scss'

const Home = () => {

    const dispatch = useDispatch()

    const [bicycle, setBicycle] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)


    async function fetchBicycle() {
        try{
            const {data} = await axios.get('http://localhost:3001/api/v1/bicycle?_limit=12')
            setBicycle(data)
        }catch (e){
            setError(e)
        }finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchBicycle()
    }, [])


    return <>
        <div className={styles.Home}>
            {/*<Slider items={array} width={size.clientWidth}/>*/}
            <div className={"mx-auto"} style={{maxWidth: '764px'}}>
                <div className={styles.list} >
                    {!loading ? (!error ? (
                        bicycle && bicycle.map((bike) =><Bicycle key={bike._id} bike={bike} dispatch={dispatch}/> )
                    ) : (<>{error.message}</>)): <>Загрузка...</>}
                </div>
                <div className={"my-5 flex mx-auto justify-center gap-2 items-center cursor-pointer"}>
                    <Link to={"Katalog"} className={"text-xl"}>Смотреть все</Link>
                    <div className={"w-2 h-2 border-b-black border-b border-r border-r-black -rotate-45 translate-y-1"}></div>
                </div>
            </div>
        </div>
    </>
}
export default Home