import Bicycle from "../components/Bicycle";
import TuneIcon from '@mui/icons-material/Tune';
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {openSidebarFilter} from '../store/sidebarSlice'
import {Link} from "react-router-dom";
import {setOrder, setSort} from "../store/filterSlice";
import Sort from "../components/Filter/Sort";
import Order from "../components/Filter/Order";


const Catalog = () => {

    const {bicycles, status, error} = useSelector((state) => state.bicycle)
    const {sort, order} = useSelector((state) => state.filter)

    const [isOpenSort, setIsOpenSort] = useState(false)
    const openSort = () => {
        setIsOpenSort(prev => !prev)
    }

    const [isOpenOrder, setIsOpenOrder] = useState(false)
    const openOrder = () => {
        setIsOpenOrder(prev => !prev)
    }

    const dispatch = useDispatch()

    return <div className={"max-w-3xl m-auto"}>
        <div className={"flex gap-4 opacity-40  mb-10"}>
            <Link to={"/"}>Главная</Link>
            -
            <Link to={"/katalog"}>Каталог</Link>
        </div>
        <div className={"text-2xl"}>Каталог</div>
        <div className={"flex justify-between my-5"}>
            <div className={"flex gap-3 cursor-pointer"} onClick={() => dispatch(openSidebarFilter())}>
                <div><TuneIcon/></div>
                <div>Фильтры</div>
            </div>
            <div className={"flex gap-3 relative"}>
                <Order openOrder={openOrder} isOpenOrder={isOpenOrder} dispatch={dispatch} order={order} sort={sort} setOrder={setOrder}/>
                <Sort isOpenSort={isOpenSort} openSort={openSort} dispatch={dispatch} setSort={setSort} sort={sort}/>
            </div>
        </div>
        <div className={"grid grid-cols-4 gap-3"}>
            {status !== 'loading' ? (!error ? bicycles.map((bike) => <Bicycle key={bike._id} bike={bike}/>) :
                <div>Server error</div>) : (<div>loading...</div>)}
        </div>
    </div>
}
export default Catalog