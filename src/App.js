import './App.css';
import Layout from "./components/Layout/Layout";
import {
    createBrowserRouter, createRoutesFromElements, Route,
    RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Katalog from "./pages/Katalog";
import {useDispatch, useSelector} from 'react-redux'
import Order from "./pages/Order";
import Making from "./pages/Making";
import Cart from "./pages/Cart";
import Auth from "./pages/Auth";
import SinglePage from "./pages/SinglePage";
import Profile from "./pages/Profile";
import {useEffect} from "react";
import {fetchBicycles} from "./store/bicycleSlice";

function App() {

    const dispatch = useDispatch()
    const {search, sort, order, color, category, material, price} = useSelector((state) => state.filter)
    useEffect(() => {
        dispatch(fetchBicycles({search, sort, order, color, category, material,  minPrice:price[0], maxPrice:price[1]}))
    }, [sort, order, search])

    const router = createBrowserRouter(createRoutesFromElements(
        <Route element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="katalog" element={<Katalog/>}/>
            <Route path="order/:id" element={<Order/>}/>
            <Route path="/bicycle/:id" element={<SinglePage/>}/>
            {/*<Route path="/bicycle/:id" element={<h1>single</h    1>}/>*/}
            <Route path="making" element={<Making/>}/>
            <Route path="cart" element={<Cart/>}/>
            <Route path="/auth/*" element={<Auth/>}/>
            <Route path="/profile/*" element={<Profile/>}/>
        </Route>
    ))

    return (
        <RouterProvider router={router}/>
    );
}

export default App;
