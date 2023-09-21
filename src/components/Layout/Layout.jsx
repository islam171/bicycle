import Header from "./Header";
import Footer from "./Footer";
import SideBarMenu from "../SideBarMenu";
import {Outlet} from "react-router-dom";
import SideBarFilter from "../SideBarFilter";
import {useDispatch, useSelector} from "react-redux";
import {closeSidebarFilter, closeSidebarMenu} from "../../store/sidebarSlice";

const Layout = () => {

    const closeSidebar = () => {
        isOpenSidebarFilter && dispatch(closeSidebarFilter())
        isOpenSidebarMenu && dispatch(closeSidebarMenu())
    }
    const dispatch = useDispatch()
    const {isOpenSidebarFilter} = useSelector(state => state.sideBar)
    const {isOpenSidebarMenu} = useSelector(state => state.sideBar)

    return <div className={"max-w-screen-xl mx-auto my-0 min-h-full flex flex-col max-xl:px-5 relative"} onClick={() => closeSidebar()}>
        <Header/>
        <div className={"flex-auto"}>
            <Outlet/>
        </div>
        <Footer/>
        <SideBarMenu/>
        <SideBarFilter/>
    </div>
}

export default Layout