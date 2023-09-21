import {Link, Route, Routes} from "react-router-dom";

const Profile = () => {
    return <>
        <div className={"flex pt-10"}>
            <div className={"w-56 flex flex-col gap-1"}>
                <Link className={"underline"} to={"/profile"}>История заказов</Link>
                <Link className={"underline"} to={"address"}>Адрес доставки</Link>
                <Link className={"underline"} to={"discounts"}>Скидки и бонусы</Link>
                <Link className={"underline"} to={"contacts"}>Контактные данные</Link>
                <div className={"underline cursor-pointer"}>Выход</div>
            </div>
            <div>
                <Routes>
                    <Route path={"/"} element={<div>История заказов</div>}/>
                    <Route path={"/address"}  element={<div>Адресс доставки</div>}/>
                    <Route path={"/discounts"}  element={<div>Скидки и бонусы</div>}/>
                    <Route path={"/contacts"}  element={<div>Контактные данные</div>}/>
                </Routes>
            </div>
        </div>

    </>
}

export default Profile