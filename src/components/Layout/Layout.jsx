import Header from "./Header";
import Footer from "./Footer";
import SideBarMenu from "../Sidebars/SideBarMenu";
import {Outlet} from "react-router-dom";
import SideBarFilter from "../Sidebars/SideBarFilter";
import {useDispatch, useSelector} from "react-redux";
import {closeSidebarFilter, closeSidebarMenu, closeSidebarFilterAdmin} from "../../store/sidebarSlice";
import AdminSideBarFilter from "../../pages/Admin/AdminSideBarFilter";
import ModalMain from "../modal/ModalMain";

const Layout = () => {

    const close = () => {
        isOpenSidebarFilter && dispatch(closeSidebarFilter())
        isOpenSidebarMenu && dispatch(closeSidebarMenu())
        isOpenSidebarFilterAdmin && dispatch(closeSidebarFilterAdmin())
    }
    const dispatch = useDispatch()
    const {isOpenSidebarFilter} = useSelector(state => state.sideBar)
    const {isOpenSidebarMenu} = useSelector(state => state.sideBar)
    const {isOpenSidebarFilterAdmin} = useSelector(state => state.sideBar)


    return <div className={"max-w-screen-xl mx-auto my-0 min-h-full flex flex-col max-xl:px-5 relative"} onClick={() => close()}>
        <Header/>
        <div className={"flex-auto"}>
            <Outlet/>
        </div>
        <Footer/>
        <SideBarMenu/>
        <SideBarFilter/>
        <AdminSideBarFilter/>
        <ModalMain/>
    </div>
}

export default Layout