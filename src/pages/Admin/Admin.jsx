import {Route, Routes} from "react-router-dom";
import {useEffect} from "react";
import {fetchBicyclesAdmin, getCountBicyclesAdmin, getIsAdmin} from "../../store/adminSlice";
import {useDispatch, useSelector} from "react-redux";
import AdminLinks from "./AdminLinks";
import Category from "./Category/Category";
import AdminBicycle from "./Bicycle/AdminBicycle";
import Color from "./Color/Color";
import Material from "./Material/Material";
import Package from "./Package/Package";
import User from "./User/User"


const Admin = () => {

    const dispatch = useDispatch()
    const {token} = useSelector(state => state.user)
    const {isAdmin} = useSelector(state => state.admin)

    useEffect(() => {
        dispatch(getIsAdmin(token))
    }, [dispatch, token])

    const {search, sort, order, color, category, material, price, page, limit} = useSelector(state => state.admin)

    useEffect(() => {
        dispatch(fetchBicyclesAdmin({search, sort, order, color, category, material, minPrice:price[0], maxPrice:price[1], page, limit}))
        dispatch(getCountBicyclesAdmin({search, sort, order, color, category, material, minPrice:price[0], maxPrice:price[1]}))
    }, [search, sort, order, color, category, material, price, page, limit, dispatch])

    useEffect(() => {
        dispatch(getIsAdmin(token))
    }, [token, dispatch])

    if(!isAdmin){
        return <>Нет доступа</>
    }

    return <div className={"max-w-3xl m-auto"}>
        <AdminLinks/>
        <Routes>
            <Route path={"/bicycle/*"} element={<AdminBicycle/>}></Route>
            <Route path={"/category"} element={<Category/>}></Route>
            <Route path={"/material"} element={<div><Material/></div>}></Route>
            <Route path={"/color"} element={<div><Color/></div>}></Route>
            <Route path={"/package"} element={<div><Package/></div>}></Route>
            <Route path={"/users"} element={<div><User/></div>}></Route>
        </Routes>
    </div>
}

export default Admin