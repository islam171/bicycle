import {Route, Routes} from "react-router-dom";
import ProductList from "./AdminBicycleList";
import AddBicycle from "./AddBicycle";
import UpdateBicycle from "./UpdateBicycle";

const AdminBicycle = () => {
    return <>
        <Routes>
            <Route path={"/"} element={<ProductList/>}/>
            <Route path={"/add"} element={<AddBicycle/>}/>
            <Route path={"/update/:id"} element={<UpdateBicycle/>}/>
        </Routes>
    </>
}

export default AdminBicycle