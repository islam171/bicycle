import TelegramIcon from "@mui/icons-material/Telegram";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {closeSidebarMenu} from "../store/sidebarSlice";
import useEventListener from "@use-it/event-listener";
import MenuBar from "./MenuBar";

const SideBarMenu = ({saidbarVisisble, closeSidebar}) => {

    const [isVisibleInput, setIsVisibleInput] = useState(false)
    const ShowSearch = () => {
        !isVisibleInput && setIsVisibleInput(true)
    }
    const HiddenSearch = () => {
        isVisibleInput && setIsVisibleInput(false)
    }
    const dispatch = useDispatch()
    const {isOpenSidebarMenu} = useSelector(state => state.sideBar)


    // const sideBlock = useRef([])
    // const sideBar = useRef()
    //
    // const sideBlockHandler = (i) => {
    //     if (sideBlock.current[i].childNodes[1].classList.contains('hidden')) {
    //         sideBlock.current[i].childNodes[1].classList.remove('hidden')
    //         sideBlock.current[i].childNodes[1].classList.add('flex')
    //         sideBlock.current[i].childNodes[0].childNodes[1].classList.add('rotate-180')
    //     } else {
    //         sideBlock.current[i].childNodes[1].classList.add('hidden')
    //         sideBlock.current[i].childNodes[1].classList.remove('flex')
    //         sideBlock.current[i].childNodes[0].childNodes[1].classList.remove('rotate-180')
    //     }
    // }
    // const handleClick = (e) => {
    //     for (let i = 0; i < sideBlock.current.length; i++) {
    //         let element = sideBlock.current[i];
    //         if (element && element.contains(e.target)) {
    //             sideBlockHandler(i)
    //         }
    //     }
    // };
    // useEventListener("click", handleClick, sideBar.current);

    return <div onClick={e => e.stopPropagation()} >
        <div className={`fixed top-0 left-0 w-96 overflow-y-scroll overflow-x-hidden h-full bg-white transition-all delay-75 max-md:w-full ${!isOpenSidebarMenu && '-translate-x-full'} z-20`}>
            <div className={'relative md:hidden'}>
                <nav className={`flex py-3 gap-4 ${isVisibleInput && 'hidden'} transition-all delay-700 px-2`}>
                    <div onClick={ShowSearch}>
                        <SearchIcon />
                    </div>
                    <PersonIcon/>
                    <ShoppingCartIcon/>
                    <SignalCellularAltIcon/>
                </nav>
                <div className={`${!isVisibleInput && 'hidden'} w-full h-full bg-gray-100 flex transition-all delay-700 p-2`}>
                    <div className={"w-10 h-10 relative"} onClick={HiddenSearch}>
                        <span className={"w-full h-0.5 absolute top-1/2 right-0 rotate-45 -translate-y-1/2 bg-black"}></span>
                        <span className={"w-full h-0.5 absolute top-1/2 right-0 -rotate-45 -translate-y-1/2 bg-black"}></span>
                    </div>
                    <input type="text" className={"bg-gray-100 w-full focus:outline-none px-2"} placeholder={"Поиск"}/>
                </div>
                <div className={"absolute top-1/2 -translate-y-1/2 right-2"}>
                    <div className={"w-10 h-10 relative z-10"} onClick={() => dispatch(closeSidebarMenu())}>
                        <span
                            className={"w-full h-0.5 absolute top-1/2 right-0 rotate-45 -translate-y-1/2 bg-black"}></span>
                        <span
                            className={"w-full h-0.5 absolute top-1/2 right-0 -rotate-45 -translate-y-1/2 bg-black"}></span>
                    </div>
                </div>
            </div>
            <div className={"px-3"}>
                <div>
                    <h1 className={"py-5 border-b-2 font-bold"}><Link to={"katalog"}>Каталог</Link></h1>
                    <div className={"border-b"}>
                        <MenuBar title={"Размер"}>
                            <div>Подкатегория 1</div>
                            <div>Подкатегория 2</div>
                            <div>Подкатегория 3</div>
                        </MenuBar>
                    </div>
                    <div className={"border-b"}>
                        <MenuBar title={"Размер"}>
                            <div>Подкатегория 1</div>
                            <div>Подкатегория 2</div>
                            <div>Подкатегория 3</div>
                        </MenuBar>
                    </div>
                    <div className={"border-b"}>
                        <MenuBar title={"Размер"}>
                            <div>Подкатегория 1</div>
                            <div>Подкатегория 2</div>
                            <div>Подкатегория 3</div>
                        </MenuBar>
                    </div>
                </div>
                <div className={'py-2'}>
                    <h1 className={"pt-3 font-bold"}>Верхние меню</h1>
                    <div className={"flex flex-col"}>
                        <Link to={'/Katalog'} className={"pt-2"}>Каталог</Link>
                        <Link to={'/Katalog'} className={"pt-2"}>Каталог</Link>
                        <Link to={'/Katalog'} className={"pt-2"}>Каталог</Link>
                        <Link to={'/Katalog'} className={"pt-2"}>Каталог</Link>
                        <Link to={'/Katalog'} className={"pt-2"}>Каталог</Link>a>
                    </div>
                </div>
                <div className={'py-5'}>
                    <h1 className={"pt-3 font-bold"}>Контакты</h1>
                    <div className={"flex flex-col"}>
                        <Link to={'/Katalog'} className={"pt-2"}>+7(800) 800-80-80</Link>
                        <Link to={'/Katalog'} className={"pt-2"}>+7(800) 800-80-80</Link>
                    </div>
                </div>
                <div className={"flex py-5 gap-3 justify-start w-full max-md:justify-start"}>
                    <TelegramIcon/>
                    <SignalCellularAltIcon/>
                    <SignalCellularAltIcon/>
                    <YouTubeIcon/>
                    <SignalCellularAltIcon/>
                </div>
            </div>
            <div className={"fixed top-5 bg-white z-30 rounded-full w-10 h-10 flex items-center justify-center max-md:hidden transition-all delay-500"} style={{left:400}} onClick={() => dispatch(closeSidebarMenu())}>
                <div className={"w-6 h-6 relative z-30"}>
                    <span
                        className={"w-full h-0.5 absolute top-1/2 right-0 rotate-45 -translate-y-1/2 bg-black"} style={{height: "0.5px"}}></span>
                    <span
                        className={"w-full h-0.5 absolute top-1/2 right-0 -rotate-45 -translate-y-1/2 bg-black"} style={{height: "0.5px"}}></span>
                </div>
            </div>
        </div>
    </div>
}

export default SideBarMenu