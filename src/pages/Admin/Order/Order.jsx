import {useDispatch, useSelector} from "react-redux";
import {useCallback, useState} from "react";
import AdminBicycleItem from "../AdminItem";
import {deleteMaterial} from "../../../store/array/mateiralSlice";

const Order = () => {
    const {orders} = useSelector(state => state.order)
    const {token} = useSelector(state => state.user)
    const dispatch = useDispatch()

    const [isOpenModal, setIsOpenModel] = useState(false)
    const [updateData, setUpdateData] = useState({})

    const openModal = useCallback((item, _id) => {
        setUpdateData({item, _id})
        !isOpenModal && setIsOpenModel(true)
    }, [isOpenModal])
    const closeModal = useCallback(() => {
        isOpenModal && setIsOpenModel(false)
    }, [isOpenModal])

    return <>
        <div className={"max-w-3xl m-auto my-3"}>
            <div className={"flex flex-col gap-2"}>
                {orders.map(order => <AdminBicycleItem key={order._id} item={order} dispatch={dispatch} deleteSlice={deleteMaterial} token={token} openModal={openModal}/>)}
            </div>
        </div>
    </>
}

export default Order