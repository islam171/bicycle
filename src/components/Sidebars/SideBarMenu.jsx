import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {closeSidebarMenu} from "../../store/sidebarSlice";
import MenuBar from "../MenuBar";
import {setCategory, setColor, setMaterial} from "../../store/filterSlice";
import { Icon28LogoVkColor } from '@vkontakte/icons';
import SidebarHeaderMobile from "./SidebarHeaderMobile";

const SideBarMenu = () => {

    const dispatch = useDispatch()

    const {isOpenSidebarMenu} = useSelector(state => state.sideBar)
    const {materials} = useSelector(state => state.material)
    const {categories} = useSelector(state => state.category)
    const {colors} = useSelector(state => state.color)


    return <div onClick={e => e.stopPropagation()}>
        <div
            className={`fixed top-0 left-0 w-96 overflow-y-scroll overflow-x-hidden h-full bg-white transition-all delay-75 max-md:w-full ${!isOpenSidebarMenu && '-translate-x-full'} z-20`}>
            <SidebarHeaderMobile sidebar={"menu"}/>
            <div className={"px-3"}>
                <div>
                    <h1 className={"py-5 border-b-2 font-bold"}><Link to={"katalog"}>Каталог</Link></h1>
                    <MenuBar title={"Материал"}>
                        {materials.length > 0 && materials.map((material) =>
                            <Link to={"katalog"} key={material._id} onClick={() => dispatch(setMaterial(material._id))}>
                                {material.name}
                            </Link>
                        )}
                    </MenuBar>
                    <MenuBar title={"Тип"}>
                        {categories.length > 0 && categories.map((category) =>
                            <Link to={"katalog"} key={category._id} onClick={() => dispatch(setCategory(category._id))}>
                                {category.name}
                            </Link>
                        )}
                    </MenuBar>
                    <MenuBar title={"Цвет"}>
                        {colors.length > 0 && colors.map((colors) =>
                            <Link to={"katalog"} key={colors._id} onClick={() => dispatch(setColor(colors._id))}>
                                {colors.name}
                            </Link>
                        )}
                    </MenuBar>
                </div>
            </div>
            <div
                className={"fixed top-5 bg-white z-30 rounded-full w-10 h-10 flex items-center justify-center max-md:hidden transition-all delay-500"}
                style={{left: 400}} onClick={() => dispatch(closeSidebarMenu())}>
                <div className={"w-6 h-6 relative z-30"}>
                    <span
                        className={"w-full h-0.5 absolute top-1/2 right-0 rotate-45 -translate-y-1/2 bg-black"}
                        style={{height: "0.5px"}}></span>
                    <span
                        className={"w-full h-0.5 absolute top-1/2 right-0 -rotate-45 -translate-y-1/2 bg-black"}
                        style={{height: "0.5px"}}></span>
                </div>
            </div>
        </div>
    </div>
}

export default SideBarMenu