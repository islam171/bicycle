import {
    closeSidebarFilter, closeSidebarFilterAdmin, closeSidebarMenu, toggleInputSidebar
} from "../../store/sidebarSlice";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import InputSearchSidebar from "../Inputs/InputSearchSidebar";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

const SidebarHeaderMobile = ({sidebar}) => {

    const {isOpenInputSidebar} = useSelector(state => state.sideBar)
    const dispatch = useDispatch()
    const {token} = useSelector(state => state.user)

    return <>
        <div className={"relative md:hidden"}>
            <nav
                className={`flex py-3 gap-4 ${isOpenInputSidebar && 'hidden'} md:hidden transition-all delay-700 px-2`}>
                <div onClick={() => dispatch(toggleInputSidebar())}>
                    <SearchIcon/>
                </div>
                <Link to={token ? "/profile" : "/auth/login"}><PersonIcon
                    onClick={() => {
                        sidebar === "adminFilter" && dispatch(closeSidebarFilterAdmin())
                        sidebar === "menu" && dispatch(closeSidebarMenu())
                        sidebar === "filter" && dispatch(closeSidebarFilter())
                    }}
                /></Link>
                <Link to={"/cart"}><ShoppingCartIcon
                    onClick={() => {
                        sidebar === "adminFilter" && dispatch(closeSidebarFilterAdmin())
                        sidebar === "menu" && dispatch(closeSidebarMenu())
                        sidebar === "filter" && dispatch(closeSidebarFilter())
                    }}
                /></Link>
            </nav>
            <InputSearchSidebar/>
            <div className={"absolute top-1/2 -translate-y-1/2 right-2"}>
                <div className={"w-10 h-10 relative z-10"} onClick={() => {
                    sidebar === "adminFilter" && dispatch(closeSidebarFilterAdmin())
                    sidebar === "menu" && dispatch(closeSidebarMenu())
                    sidebar === "filter" && dispatch(closeSidebarFilter())
                }}>
                        <span
                            className={"w-full h-0.5 absolute top-1/2 right-0 rotate-45 -translate-y-1/2 bg-black"}></span>
                    <span
                        className={"w-full h-0.5 absolute top-1/2 right-0 -rotate-45 -translate-y-1/2 bg-black"}></span>
                </div>
            </div>
        </div>
    </>
}

export default SidebarHeaderMobile