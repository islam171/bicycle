import {useDispatch, useSelector} from "react-redux";
import {useCallback, useState} from "react";
import UpdateModal from "../../../components/modal/updateModal";
import AddAdminItem from "../../../components/forms/Admin/addAdminItem";
import AdminBicycleItem from "../AdminItem";
import {deleteColor} from "../../../store/array/colorSlice";

const Package = () => {
    const {packages} = useSelector(state => state.package)
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
            <div className={"bg-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"}>
                {isOpenModal && <UpdateModal closeModal={closeModal} data={updateData.item} func={"package"} token={token}/>}
            </div>
            <div className={"my-5"}>
                <AddAdminItem func={"package"}/>
            </div>
            <div className={"flex flex-col gap-2"}>
                {packages.map(pack => <AdminBicycleItem key={pack._id} item={pack} dispatch={dispatch} deleteSlice={deleteColor} token={token} openModal={openModal}/>)}
            </div>
        </div>
    </>
}

export default Package