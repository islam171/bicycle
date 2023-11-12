import {openSidebarFilterAdmin} from "../../../store/sidebarSlice";
import TuneIcon from "@mui/icons-material/Tune";
import Order from "../../../components/Filter/Order";
import {setOrder, setSort} from "../../../store/adminSlice";
import Sort from "../../../components/Filter/Sort";
import {useDispatch, useSelector} from "react-redux";
import {useCallback, useState} from "react";
import AdminBicycleItem from "./AdminBicycleItem";
import AdminPagination from "../AdminPagination";

const AdminBicycleList = () => {

    const {bicycles, status, error} = useSelector((state) => state.admin)
    const {sort, order} = useSelector((state) => state.admin)
    const {token} = useSelector((state) => state.user)

    const [isOpenSort, setIsOpenSort] = useState(false)
    const openSort = useCallback(() => {
        setIsOpenSort(prev => !prev)
    }, [])

    const [isOpenOrder, setIsOpenOrder] = useState(false)
    const openOrder = useCallback(() => {
        setIsOpenOrder(prev => !prev)
    }, [])

    const dispatch = useDispatch()

    return <>
        <div className={"max-w-3xl m-auto"}>
            <div className={"flex justify-between my-5"}>
                <div className={"flex gap-3 cursor-pointer"} onClick={() => dispatch(openSidebarFilterAdmin())}>
                    <div><TuneIcon/></div>
                    <div>Фильтры</div>
                </div>
                <div className={"flex gap-3 relative"}>
                    <Order openOrder={openOrder} isOpenOrder={isOpenOrder} dispatch={dispatch} order={order} sort={sort} setOrder={setOrder}/>
                    <Sort isOpenSort={isOpenSort} openSort={openSort} dispatch={dispatch} setSort={setSort} sort={sort}/>
                </div>
            </div>
            <div className={"flex flex-col max-sm:items-center"}>
                {status !== 'loading' ? (!error ? bicycles.map((bike) => <AdminBicycleItem key={bike._id} bike={bike} dispatch={dispatch} token={token}/>) :
                    <div>Server error</div>) : (<div>loading...</div>)}
            </div>
            <AdminPagination/>
        </div>
    </>
}

export default AdminBicycleList