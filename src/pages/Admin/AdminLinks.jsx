import {Link, Route, Routes} from "react-router-dom";

const AdminLinks = () => {
    return <>
        <div>
            <div className={"inline-flex flex-col"}>
                <div className={"flex gap-5 "}>
                    <Link to={"bicycle"}>Велосипеды</Link>
                    <Routes>
                        <Route path={"/bicycle/*"} element={<Link to={"add"}>Добавить</Link>}/>
                    </Routes>
                </div>
                <Link to={"category"}>Типы</Link>
                <Link to={"material"}>Материалы</Link>
                <Link to={"color"}>Цвета</Link>
                <Link to={"package"}>Комплектации</Link>
                <Link to={"users"}>Пользователи</Link>
            </div>
        </div>
    </>
}

export default AdminLinks