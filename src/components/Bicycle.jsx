import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {Link} from "react-router-dom";
import {memo} from "react";


const Bicycle = memo(({bike}) => {
    return <>
        <div className={" relative transition delay-500"}>
            <div className={"absolute right-2"}>
                <FavoriteBorderOutlinedIcon/>
            </div>
            <img src="" alt="" className={"w-full h-44"}/>
            <Link to={`/bicycle/${bike._id}`} >{bike.name}</Link>
            <div className={"flex justify-between"}>
                <span className={"flex items-center"}>{bike.price} ₽</span>
                <div className={"w-10 h-10 flex items-center justify-center"}
                     style={{backgroundColor: "#1b2738"}}>
                    <ShoppingCartOutlinedIcon color="action"/>
                </div>
            </div>
        </div>
    </>
})

export default Bicycle