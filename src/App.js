import './App.css';
import Layout from "./components/Layout/Layout";
import {
    createBrowserRouter, createRoutesFromElements, Route,
    RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Katalog from "./pages/Kotalog/Katalog";
import {useDispatch, useSelector} from 'react-redux'
import Order from "./pages/Order";
import Making from "./pages/Making";
import Cart from "./pages/Cart";
import Auth from "./pages/Auth";
import SinglePage from "./pages/SinglePage";
import Profile from "./pages/Profile/Profile";
import {useEffect} from "react";
import {fetchBicycles, getCountBicycles, setFirstPage} from "./store/filterSlice";
import {getBicycles} from "./store/bicycleSlice";
import {getCart} from "./store/cartSlice";
import {getAddress, getOrders} from "./store/orderSlice";
import Admin from "./pages/Admin/Admin";


function App() {

    const dispatch = useDispatch()
    const {search, sort, order, color, category, material, price, page, limit} = useSelector((state) => state.filter)

    const {token} = useSelector(state => state.user)

    useEffect(() => {
        dispatch(fetchBicycles({search, sort, order, color, category, material,  minPrice:price[0], maxPrice:price[1], page, limit}))
        dispatch(getCountBicycles())
    }, [sort, order, search, material, color, category, price, page, limit, dispatch])

    useEffect(() => {
        if(token){
            dispatch(getCart(token))
            dispatch(getOrders(token))
            dispatch(getAddress(token))
        }
    }, [token, dispatch])

    useEffect(() => {
        dispatch(getBicycles())
    }, [dispatch])

    useEffect(() => {
        dispatch(setFirstPage())
    }, [sort, order, search, material, color, category, price, dispatch])


    const router = createBrowserRouter(createRoutesFromElements(
        <Route element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="katalog" element={<Katalog/>}/>
            <Route path="order/:id" element={<Order/>}/>
            <Route path="/bicycle/:id" element={<SinglePage/>}/>
            <Route path="making" element={<Making/>}/>
            <Route path="cart" element={<Cart/>}/>
            <Route path="/auth/*" element={<Auth/>}/>
            <Route path="/profile/*" element={<Profile/>}/>
            <Route path="/admin/*" element={<Admin/>}/>
        </Route>
    ))

    return (
        <RouterProvider router={router}/>
    );
}

export default App;
