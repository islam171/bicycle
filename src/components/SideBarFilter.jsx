import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {closeSidebarFilter} from "../store/sidebarSlice";
import useEventListener from "@use-it/event-listener";
import MenuBar from "./MenuBar";
import CustomInput from "./CustomInput";
import CheckIcon from '@mui/icons-material/Check';
import {clearState, setCategory, setColor, setMaterial} from "../store/filterSlice";
import {fetchCategory, fetchColor, fetchMaterial, fetchPrice} from "../store/filterListSlice";
import {fetchBicycles} from "../store/bicycleSlice";

const SideBarFilter = () => {

    const [isVisibleInput, setIsVisibleInput] = useState(false)
    const ShowSearch = () => {
        !isVisibleInput && setIsVisibleInput(true)
    }
    const HiddenSearch = () => {
        isVisibleInput && setIsVisibleInput(false)
    }

    const {isOpenSidebarFilter} = useSelector(state => state.sideBar)
    const dispatch = useDispatch()

    const sideBlock = useRef([])
    const sideBar = useRef()

    const sideBlockHandler = (i) => {
        if (sideBlock.current[i].childNodes[1].classList.contains('hidden')) {
            sideBlock.current[i].childNodes[1].classList.remove('hidden')
            sideBlock.current[i].childNodes[1].classList.add('flex')
            sideBlock.current[i].childNodes[0].childNodes[1].classList.add('rotate-180')
        } else {
            sideBlock.current[i].childNodes[1].classList.add('hidden')
            sideBlock.current[i].childNodes[1].classList.remove('flex')
            sideBlock.current[i].childNodes[0].childNodes[1].classList.remove('rotate-180')
        }
    }
    const handleClick = (e) => {
        for (let i = 0; i < sideBlock.current.length; i++) {
            let element = sideBlock.current[i];
            if (element && element.contains(e.target)) {
                sideBlockHandler(i)
            }
        }
    };
    useEventListener("click", handleClick, sideBar.current);

    //Filter
    const {category, color, material, sort, order, price, search} = useSelector((state) => state.filter)
    const {categories, colors, materials} = useSelector((state) => state.filterList)

    useEffect(() => {
        dispatch(fetchCategory())
        dispatch(fetchColor())
        dispatch(fetchMaterial())
        dispatch(fetchPrice())
    }, [dispatch])

    const onFilterSubmit = (search, sort, order, color, category, material, price) => {
        let filter = {search, sort, order, color, category, material, minPrice:price[0], maxPrice:price[1]}
        dispatch(fetchBicycles(filter))
    }

    return <div onClick={e => e.stopPropagation()} ref={sideBar}>
        <div
            className={`fixed top-0 left-0 w-96 overflow-y-scroll overflow-x-hidden h-screen bg-white transition-all delay-75 max-md:w-full ${!isOpenSidebarFilter && '-translate-x-full'} z-20 `}>
            <div className={"relative md:hidden"}>
                <nav
                    className={`flex py-3 gap-4 ${isVisibleInput && 'hidden'} md:hidden transition-all delay-700 px-2`}>
                    <div onClick={ShowSearch}>
                        <SearchIcon/>
                    </div>
                    <PersonIcon/>
                    <ShoppingCartIcon/>
                    <SignalCellularAltIcon/>
                </nav>
                <div
                    className={`${!isVisibleInput && 'hidden'} w-full h-full bg-gray-100 flex transition-all delay-700 p-2`}>
                    <div className={"w-10 h-10 relative"} onClick={HiddenSearch}>
                        <span
                            className={"w-full h-0.5 absolute top-1/2 right-0 rotate-45 -translate-y-1/2 bg-black"}></span>
                        <span
                            className={"w-full h-0.5 absolute top-1/2 right-0 -rotate-45 -translate-y-1/2 bg-black"}></span>
                    </div>
                    <input type="text" className={"bg-gray-100 w-full focus:outline-none px-2 z-20"}
                           placeholder={"Поиск"}/>
                </div>
                <div className={"absolute top-1/2 -translate-y-1/2 right-2"}>
                    <div className={"w-10 h-10 relative z-10"} onClick={() => dispatch(closeSidebarFilter())}>
                        <span
                            className={"w-full h-0.5 absolute top-1/2 right-0 rotate-45 -translate-y-1/2 bg-black"}></span>
                        <span
                            className={"w-full h-0.5 absolute top-1/2 right-0 -rotate-45 -translate-y-1/2 bg-black"}></span>
                    </div>
                </div>
            </div>
            <div className={"px-3 pb-5 h-full"}>
                <div className={"flex flex-col h-full"}>
                    <div className={"border-b-2 flex justify-between"}>
                        <h1 className={"py-5 font-semibold text-2xl"}>Фильтры</h1>
                        <button className={""} onClick={() => dispatch(clearState())}>Сброс</button>
                    </div>
                    <div className={"border-b"}>
                        <MenuBar title={"Цена"}>
                            <div className={""}>
                                <CustomInput/>
                            </div>
                        </MenuBar>
                    </div>
                    <div className={"border-b"}>
                        <MenuBar title={"Тип"}>
                            <div className={"flex flex-col gap-5"}>
                                <div onClick={() => dispatch(setCategory(''))}
                                     className={"flex text-base items-center gap-2"}>
                                            <span className={"w-6 h-6 bg-gray-300 relative"}>
                                                {category === '' ? (
                                                    <CheckIcon className={"absolute top-0 right-0"}/>
                                                ) : ''}
                                            </span>Все
                                </div>
                                {categories && categories.map(
                                    cat =>
                                        <div key={cat._id} onClick={() => dispatch(setCategory(cat._id))}
                                             className={"flex text-base items-center gap-2"}>
                                            <span className={"w-6 h-6 bg-gray-300 relative"}>
                                                {cat._id === category ? (
                                                    <CheckIcon className={"absolute top-0 right-0"}/>
                                                ) : ''}
                                            </span>{cat.name}
                                        </div>
                                )}
                            </div>
                        </MenuBar>
                    </div>
                    <div className={"border-b"}>
                        <MenuBar title={"Цвет"}>
                            <div className={"flex flex-col gap-5"}>
                                <div onClick={() => dispatch(setColor(''))}
                                     className={"flex text-base items-center gap-2"}>
                                            <span className={"w-6 h-6 bg-gray-300 relative"}>
                                                {color === '' ? (
                                                    <CheckIcon className={"absolute top-0 right-0"}/>
                                                ) : ''}
                                            </span>Все
                                </div>
                                {colors && colors.map(
                                    col =>
                                        <div key={col._id} onClick={() => dispatch(setColor(col._id))}
                                             className={"flex text-base items-center gap-2"}>
                                            <span className={"w-6 h-6 bg-gray-300 relative"}>
                                                {col._id === color ? (
                                                    <CheckIcon className={"absolute top-0 right-0"}/>
                                                ) : ''}
                                            </span>{col.name}
                                        </div>
                                )}
                            </div>
                        </MenuBar>
                    </div>
                    <div className={"border-b"}>
                        <MenuBar title={"Материал"}>
                            <div className={"flex flex-col gap-5"}>
                                <div onClick={() => dispatch(setMaterial(''))}
                                     className={"flex text-base items-center gap-2"}>
                                            <span className={"w-6 h-6 bg-gray-300 relative"}>
                                                {(material === '') ? (
                                                    <CheckIcon className={"absolute top-0 right-0"}/>
                                                ) : ''}
                                            </span>Все
                                </div>
                                {materials && materials.map(
                                    mat =>
                                        <div key={mat._id} onClick={() => dispatch(setMaterial(mat._id))}
                                             className={"flex text-base items-center gap-2"}>
                                            <span className={"w-6 h-6 bg-gray-300 relative"}>
                                                {mat._id === material ? (
                                                    <CheckIcon className={"absolute top-0 right-0"}/>
                                                ) : ''}
                                            </span>{mat.name}
                                        </div>
                                )}
                            </div>
                        </MenuBar>
                    </div>
                    <div className={"flex-auto"}></div>
                </div>
            </div>
            <div className={"fixed top-5 bg-white z-30 rounded-full w-10 h-10 flex items-center justify-center max-md:hidden transition-all delay-500"}
                style={{left: 400}} onClick={() => dispatch(closeSidebarFilter())}>
                <div className={"w-6 h-6 relative z-30"}>
                    <span
                        className={"w-full h-0.5 absolute top-1/2 right-0 rotate-45 -translate-y-1/2 bg-black"}
                        style={{height: "0.5px"}}></span>
                    <span
                        className={"w-full h-0.5 absolute top-1/2 right-0 -rotate-45 -translate-y-1/2 bg-black"}
                        style={{height: "0.5px"}}></span>
                </div>
            </div>
            <div className={"bg-gray-900 w-full h-16 text-white text-center flex justify-center items-center font-bold text-lg"} onClick={() => onFilterSubmit(search, sort, order, color, category, material, price)}>Применить</div>
        </div>
    </div>
}

export default SideBarFilter