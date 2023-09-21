import {memo} from "react";

const Order = memo(({openOrder, isOpenOrder, dispatch, order, sort, setOrder}) => {
    return <>
        <div className={"flex gap-3 relative"} onClick={openOrder}>
            <div className={"bg-gray-300 h-6 w-6"}></div>
            <div
                className={`absolute top-full right-0 w-40 text-sm shadow-md cursor-pointer z-10 ${!isOpenOrder && 'hidden'}`}>
                <div
                    className={`px-3 py-1 hover:bg-gray-100 ${order === "ASC" ? "bg-gray-100" : "bg-white"}`}
                    onClick={() => dispatch(setOrder("ASC"))}>
                    {sort === '_id' ? ("Сначала новое") : (sort === 'price' ? ('Сначало дорогие') : ("По порядку"))}</div>
                <div
                    className={`px-3 py-1 hover:bg-gray-100 ${order === "DESC" ? "bg-gray-100" : "bg-white"}`}
                    onClick={() => dispatch(setOrder("DESC"))}>
                    {sort === '_id' ? ("Сначала старое") : (sort === 'price' ? ('Сначало дешевые') : ("В обратном порядке"))}</div>
            </div>
        </div>
    </>
})

export default Order