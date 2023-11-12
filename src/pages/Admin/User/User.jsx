import {useDispatch, useSelector} from "react-redux";
import {useCallback, useEffect, useState} from "react";
import UserAdminItem from "./UserAdminItem";
import {deleteUser, fetchUsers} from "../../../store/userSlice";
import UserUpdateModal from "./UserUpdateModal";

const User = () => {
    const {token, users, status, error} = useSelector(state => state.user)
    const dispatch = useDispatch()

    const [isOpenModal, setIsOpenModel] = useState(false)
    const [updateData, setUpdateData] = useState({})

    useEffect(() => {
        dispatch(fetchUsers(token))
    }, [dispatch, token])

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
                {isOpenModal && <UserUpdateModal closeModal={closeModal} data={updateData.item} token={token}/>}
            </div>
            <div className={"my-5"}>
                {/*<AddAdminItem func={"use"}/>*/}
            </div>
            <div className={"flex flex-col gap-2"}>
                {status !== 'loading' ? (!error ? users.map(material =>
                    <UserAdminItem
                        key={material._id}
                        item={material}
                        dispatch={dispatch} deleteSlice={deleteUser} token={token} openModal={openModal}/>)
                : <>Server Error</>): <>Loading...</>}
            </div>
        </div>
    </>
}

export default User