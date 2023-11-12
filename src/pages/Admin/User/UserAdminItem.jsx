import {AiOutlineDelete, AiOutlineEdit} from "react-icons/ai";
import React from 'react'

const UserAdminItem = React.memo(({item, deleteSlice, token, dispatch, openModal}) => {

    // console.log("UserAdminItem render!")

    const click = (item, token) => {
        dispatch(deleteSlice({_id:item._id, token}))
    }

    return <>
        <div className={"border flex justify-between text-xl"}>
            <ul>
                <li className={"flex gap-3"}>
                    <div>Имя:</div>
                    <div>{item.username}</div>
                </li>
                <li className={"flex gap-3"}>
                    <div>Дата регестрации:</div>
                    <div>{item.createdAt}</div>
                </li>
                <li className={"flex gap-3"}>
                    <img src="" alt=""/>
                </li>
            </ul>
            <div className={"flex"}>
                {deleteSlice && <div><AiOutlineDelete size={30} onClick={() => click(item, token)}/></div>}
                <div><AiOutlineEdit size={30} onClick={() => openModal(item, item._id)} /></div>
            </div>
        </div>
    </>
})
export default UserAdminItem