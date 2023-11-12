import {useDispatch, useSelector} from "react-redux";
import {nextPage, prevPage} from "../../store/adminSlice";
import React from 'react'

const AdminPagination = React.memo(() => {

    const dispatch = useDispatch()
    const {page, limit, countBicycle} = useSelector(state => state.admin)

    return <div className={"flex w-full justify-center gap-5 my-5"}>
        <div  onClick={() => dispatch(prevPage())} className={page !== 1? "cursor-pointer" : "cursor-default text-gray-500"}>{"<<"}</div>
        <span>{page}</span>
        <div onClick={() => dispatch(nextPage())} className={limit < countBicycle? "cursor-pointer" : "cursor-default text-gray-500"}>{">>"}</div>
    </div>
})

export default AdminPagination