import {useEffect,} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchPackage} from "../../store/array/packageSlice";
import {fetchMaterial} from "../../store/array/mateiralSlice";
import {fetchBicyclesAdmin} from "../../store/adminSlice";
import {clearState, setCategory, setColor, setMaterial} from "../../store/adminSlice";
import {closeSidebarFilterAdmin} from "../../store/sidebarSlice";
import MenuBar from "../../components/MenuBar";
import CustomInput from "../../components/Inputs/CustomInput";
import CheckIcon from "@mui/icons-material/Check";
import SidebarHeaderMobile from "../../components/Sidebars/SidebarHeaderMobile";
import {fetchCategory} from "../../store/array/categorySlice";
import {fetchColor} from "../../store/array/colorSlice";
import {fetchPrice} from "../../store/array/pricaSlice";

const AdminSideBarFilter = () => {

    const {isOpenSidebarFilterAdmin} = useSelector(state => state.sideBar)
    const dispatch = useDispatch()


    //Filter
    const {category, color, material, sort, order, price, search} = useSelector((state) => state.admin)
    const {materials} = useSelector((state) => state.material)
    const {categories} = useSelector((state) => state.category)
    const {colors} = useSelector((state) => state.color)

    useEffect(() => {
        dispatch(fetchCategory())
        dispatch(fetchColor())
        dispatch(fetchMaterial())
        dispatch(fetchPrice())
        dispatch(fetchPackage())
    }, [dispatch])

    const onFilterSubmit = (search, sort, order, color, category, material, price) => {
        let filter = {search, sort, order, color, category, material, minPrice:price[0], maxPrice:price[1]}
        dispatch(fetchBicyclesAdmin(filter))
    }

    return <div onClick={e => e.stopPropagation()}>
        <div
            className={`fixed top-0 left-0 w-96 overflow-y-scroll overflow-x-hidden h-screen bg-white transition-all delay-75 max-md:w-full ${!isOpenSidebarFilterAdmin && '-translate-x-full'} z-20 `}>
            <SidebarHeaderMobile sidebar={"adminFilter"}/>
            <div className={"px-3 pb-5 h-full"}>
                <div className={"flex flex-col h-full"}>
                    <div className={"border-b-2 flex justify-between"}>
                        <h1 className={"py-5 font-semibold text-2xl"}>Фильтры</h1>
                        <button className={""} onClick={() => dispatch(clearState())}>Сброс</button>
                    </div>
                    <div className={"border-b"}>
                        <MenuBar title={"Цена"}>
                                <CustomInput/>
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
                 style={{left: 400}} onClick={() => dispatch(closeSidebarFilterAdmin())}>
                <div className={"w-6 h-6 relative z-30"}>
                    <span
                        className={"w-full h-0.5 absolute top-1/2 right-0 rotate-45 -translate-y-1/2 bg-black"}
                        style={{height: "0.5px"}}></span>
                    <span
                        className={"w-full h-0.5 absolute top-1/2 right-0 -rotate-45 -translate-y-1/2 bg-black"}
                        style={{height: "0.5px"}}></span>
                </div>
            </div>
            <div className={"bg-gray-900 w-full h-16 text-white text-center flex justify-center items-center font-bold text-lg"}
                 onClick={() => onFilterSubmit(search, sort, order, color, category, material, price)}>Применить</div>
        </div>
    </div>
}
export default AdminSideBarFilter