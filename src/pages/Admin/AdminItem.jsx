import {AiOutlineDelete, AiOutlineEdit} from "react-icons/ai";
import React from 'react'

const AdminItem = React.memo(({item, deleteSlice, token, dispatch, openModal}) => {

    const click = (item, token) => {
        dispatch(deleteSlice({_id:item._id, token}))
    }

    return <>
        <div className={"border flex justify-between text-xl"}>
            <ul>
                <li className={"flex gap-3"}>
                    <div>Название:</div>
                    <div>{item.name}</div>
                </li>
            </ul>
            <div className={"flex"}>
                {deleteSlice && <div><AiOutlineDelete size={30} onClick={() => click(item, token)}/></div>}
                <div><AiOutlineEdit size={30} onClick={() => openModal(item, item._id)} /></div>
            </div>
        </div>
    </>
})
export default AdminItem