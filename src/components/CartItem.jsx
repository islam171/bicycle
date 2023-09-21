import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {useState} from "react";

const CartItem = ({cart}) => {

    const [count, setCount] = useState(0)

    const minus = () => {
        count > 0 ? setCount(prev => prev - 1) : setCount(0)
    }
    const plus = () => {
        setCount(prev => prev + 1)
    }

    const like = () => {
        console.log(cart, "like")
    }

    const removeCart = () => {
        console.log(cart, "remove")
    }

    return <>
        <div className={"flex gap-5 max-sm:gap-2"}>
            <div className={'flex items-center justify-center'}>
                <img src="" alt="" className={"w-32 h-32 max-sm:h-20 max-sm:w-20"}/>
            </div>
            <div className={"flex flex-col w-full justify-between"}>
                <div className={"flex w-full gap-5 max-sm:flex-col max-sm:gap-1"}>
                    <div className={"max-w-xs overflow-hidden text-xl max-sm:text-sm"}>Название товара</div>
                    <div className={"flex-auto"}></div>
                    <div className={"flex max-sm:order-3"}>
                        <button className={"px-4 text-2xl h-7 flex items-center bg-slate-200"} onClick={minus}>-
                        </button>
                        <input className={"text-xl w-10 text-center h-7 bg-slate-200"}
                               onChange={(e) => setCount(e.target.value)} value={count}/>
                        <button className={"px-4 text-2xl h-7 flex items-center bg-slate-200"} onClick={plus}>+</button>
                    </div>
                    <div className={"text-xl font-semibold whitespace-nowrap  max-sm:text-base"}>15 000 тг</div>
                </div>
                <div>7 500 P/шт</div>
            </div>
            <div>
                <FavoriteBorderIcon onClick={like}/>
                <DeleteOutlineIcon onClick={removeCart}/>
            </div>
        </div>
    </>
}

export default CartItem