import {useDispatch, useSelector} from "react-redux";
import AdminBicycleItem from "../AdminItem";
import AddAdminItem from "../../../components/forms/Admin/addAdminItem";
import {deleteCategory} from "../../../store/array/categorySlice";
import UpdateModal from "../../../components/modal/updateModal";
import {useCallback, useState} from "react";


const Category = () => {

    const {categories} = useSelector(state => state.category)
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
                {isOpenModal && <UpdateModal closeModal={closeModal} data={updateData.item} func={"category"} token={token}/>}
            </div>
            <AddAdminItem func={"category"}/>
            <div className={"flex flex-col gap-2 py-4"}>
                {categories.map(category => <AdminBicycleItem key={category._id} item={category} deleteSlice={deleteCategory} dispatch={dispatch} openModal={openModal}/>)}
            </div>
        </div>
    </>
}
export default Category