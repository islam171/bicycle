import {Link} from "react-router-dom";
import {AiOutlineDelete, AiOutlineEdit} from 'react-icons/ai'
import {deleteBicyclesAdmin} from "../../../store/adminSlice";
import {removeCart} from "../../../store/cartSlice";
import React from 'react'

const AdminBicycleItem = React.memo(({bike, dispatch, token}) => {

    return <>
        <div className={"relative transition delay-500 p-2 flex gap-5 max-sm:flex-col max-sm:items-center max-sm:w-60"}>
            <div className={"w-32 h-20 min-w-32 flex items-center justify-center bg-gray-100"}>
                <img src={`http://localhost:3001${bike.image[0]}`} alt="" className={"h-full border-0"}/>
                {/*<div className={"w-full h-full bg-gray-100"}></div>*/}
            </div>
            <div className={"mxa-sm:w-full"}>
                <Link to={`/bicycle/${bike._id}`}>{bike.name}</Link>
                <div className={"flex justify-between max-sm:justify-center"}>
                    <span className={"flex items-center"}>{bike.price} ₽</span>
                </div>
            </div>
            <div className={"flex-auto"}></div>
            <div className={"flex flex-col max-sm:flex-row max-sm:justify-between max-sm:w-full"}>
                <div><AiOutlineDelete size={30} onClick={() => {
                    dispatch(deleteBicyclesAdmin({id:bike._id, token}))
                    dispatch(removeCart({token, bike: bike}))
                }}/></div>
                <div><Link to={`update/${bike._id}`}><AiOutlineEdit size={30}/></Link></div>
            </div>
        </div>
    </>
})

export default AdminBicycleItem