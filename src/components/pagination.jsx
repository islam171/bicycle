import {useDispatch, useSelector} from "react-redux";
import {minusPage, nextPage} from "../store/filterSlice";

const Pagination = () => {

    const dispatch = useDispatch()
    const {page} = useSelector(state => state.filter)

    return <div className={"flex w-full justify-center gap-5 my-5"}>
        <div onClick={() => dispatch(minusPage())} className={"cursor-pointer"}>{"<<"}</div>
        <span>{page}</span>
        <div onClick={() => dispatch(nextPage())} className={"cursor-pointer"}>{">>"}</div>
    </div>
}

export default Pagination