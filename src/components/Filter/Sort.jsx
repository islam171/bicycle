import FilterListIcon from "@mui/icons-material/FilterList";

const Sort = ({openSort, isOpenSort, dispatch, setSort, sort}) => {
    return <>
        <div className={"flex gap-3 relative"} onClick={openSort}>
            <div>Сортировка</div>
            <div><FilterListIcon/></div>
            <div
                className={`absolute top-full right-0 w-40 text-sm shadow-md cursor-pointer z-10 ${!isOpenSort && 'hidden'}`}>
                <div className={`px-3 py-1 hover:bg-gray-100 ${sort === "_id" ? "bg-gray-100" : "bg-white"}`}
                     onClick={() => dispatch(setSort("_id"))}>По добовлению
                </div>
                <div className={`px-3 py-1 hover:bg-gray-100 ${sort === "price" ? "bg-gray-100" : "bg-white"}`}
                     onClick={() => dispatch(setSort("price"))}>По цене
                </div>
                <div className={`px-3 py-1 hover:bg-gray-100 ${sort === "name" ? "bg-gray-100" : "bg-white"}`}
                     onClick={() => dispatch(setSort("name"))}>По алфавиту
                </div>
            </div>
        </div>
    </>
}

export default Sort