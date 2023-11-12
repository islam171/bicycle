import {Link, Route, Routes, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Personal from "./Personal";
import {logout} from "../../store/userSlice";
import Story from "./Story";
import Address from "./Address";
import {logoutAdmin} from "../../store/adminSlice";

const Profile = () => {

    const {token} = useSelector(state => state.user)
    const {isAdmin} = useSelector(state => state.admin)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    if(token === ''){
        return <></>
    }

    return <>
        <div className={"flex pt-10 max-sm:flex-col"}>
            <div className={"w-56 flex flex-col gap-1"}>
                <Link className={"hover:underline"} to={"/profile"}>Личный кабинет</Link>
                {isAdmin && <Link className={"hover:underline"} to={"/admin"}>Админка</Link>}
                <Link className={"hover:underline"} to={"story"}>История заказов</Link>
                <Link className={"hover:underline"} to={"address"}>Адреса доставки</Link>
                <div onClick={() => {
                    dispatch(logout())
                    dispatch(logoutAdmin())
                    navigate("/auth/login")
                }} className={"hover:underline cursor-pointer"}>Выход</div>
            </div>
            <div className={'w-full'}>
                <Routes>
                    <Route path={"/"}  element={<Personal/>}/>
                    <Route path={"/story"} element={<Story token={token}/>}/>
                    <Route path={"/address"}  element={<Address/>}/>
                </Routes>
            </div>
        </div>

    </>
}

export default Profile