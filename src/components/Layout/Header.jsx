import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import PhoneIcon from '@mui/icons-material/Phone';
import MenuIcon from '@mui/icons-material/Menu';
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {openSidebarMenu} from "../../store/sidebarSlice";
import {setSearch} from "../../store/filterSlice";
import Title from "../Title";

const Header = ({onClick}) => {

    const [isVisibleInput, SetIsVisibleInput] = useState(false)
    const ShowSearch = () => {
        !isVisibleInput && SetIsVisibleInput(true)
    }
    const HiddenSearch = (e) => {
        isVisibleInput && SetIsVisibleInput(false)
        dispatch(setSearch(''))
        e.target.value = ""
    }

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleKeyDown = (e) => {
        if(e.keyCode === 13){
            dispatch(setSearch(e.target.value))
            return navigate("/katalog")
        }
        return null
    }

    return <div onClick={onClick}>
        <div className="flex h-14 justify-between items-center gap-2">
            <div className={"h-full flex items-center gap-2 w-36 cursor-pointer max-md:w-10"} onClick={() => dispatch(openSidebarMenu())}>
                <MenuIcon/>
                <div className={"font-bold tracking-tighter text-sm max-md:hidden"}>Меню</div>
            </div>
            <div className={`relative flex-auto ${!isVisibleInput && 'hidden'}`}>
                <input
                    type="text"
                    className={"w-full focus:outline-none px-2 bg-gray-100 h-8"}
                    placeholder={"Поиск"}
                    onKeyDown={handleKeyDown}
                />
                <div className={'absolute top-1/2 -translate-y-1/2 right-1 w-6 h-6'} onClick={HiddenSearch}>
                    <div className={'w-6 h-0.5 bg-black absolute top-1/2 -translate-y-1/2 rotate-45'}></div>
                    <div className={'w-6 h-0.5 bg-black absolute top-1/2 -translate-y-1/2 -rotate-45'}></div>
                </div>
            </div>
           <Title isVisibleInput={isVisibleInput}/>
            <div className={"h-full flex items-center justify-end"}>
                <nav className={"flex gap-4 max-md:hidden"}>
                    {!isVisibleInput && (
                        <div onClick={ShowSearch}>
                            <SearchIcon />
                        </div>
                    )}
                    <Link to={"/profile"}><PersonIcon/></Link>
                    <Link to={"/cart"}><ShoppingCartIcon/></Link>
                    <SignalCellularAltIcon/>
                </nav>
                <div className={"md:hidden"}><PhoneIcon/></div>
            </div>
        </div>
    </div>
}

export default Header