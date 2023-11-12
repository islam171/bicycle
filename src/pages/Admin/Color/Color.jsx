import {useDispatch, useSelector} from "react-redux";
import AdminBicycleItem from "../AdminItem";
import AddAdminItem from "../../../components/forms/Admin/addAdminItem";
import {deleteColor} from "../../../store/array/colorSlice";
import {useCallback, useState} from "react";
import UpdateModal from "../../../components/modal/updateModal";

const Color = () => {
    const {colors, error, status} = useSelector(state => state.color)
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
            <div className={`bg-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}>
                {isOpenModal && <UpdateModal closeModal={closeModal} data={updateData.item} func={"color"} token={token}/>}
            </div>
            <div className={"my-5"}>
                <AddAdminItem func={"color"}/>
            </div>
            <div className={"flex flex-col gap-2"}>
                {status !== "loading" ? (!error ? colors.map(color =>
                            <AdminBicycleItem
                                key={color._id}
                                item={color}
                                dispatch={dispatch}
                                deleteSlice={deleteColor}
                                token={token}
                                openModal={openModal}/>)
                        : <>Server Error!</>)
                    : <>Loading...</>
                }
            </div>
        </div>
    </>
}
export default Color