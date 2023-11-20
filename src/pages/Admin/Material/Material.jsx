import {useDispatch, useSelector} from "react-redux";
import AdminBicycleItem from "../AdminItem";
import {deleteMaterial} from "../../../store/array/mateiralSlice";
import UpdateModal from "../../../components/modal/updateModal";
import {useCallback, useState} from "react";
import AddAdminItem from "../../../components/forms/Admin/addAdminItem";

const Material = () => {
    const {materials, error} = useSelector(state => state.material)
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

    if(error){
        return <>{error}</>
    }

    return <>
        <div className={"max-w-3xl m-auto my-3"}>
            <div className={"bg-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"}>
                {isOpenModal && <UpdateModal closeModal={closeModal} data={updateData.item} func={"material"} token={token}/>}
            </div>
            <div className={"my-5"}>
                <AddAdminItem func={"material"}/>
            </div>
            <div className={"flex flex-col gap-2"}>
                {materials.map(material => <AdminBicycleItem key={material._id} item={material} dispatch={dispatch} deleteSlice={deleteMaterial} token={token} openModal={openModal}/>)}
            </div>
        </div>
    </>
}
export default Material