import Slider from 'react-slider'
import {useDispatch, useSelector} from "react-redux";
import {setPrice} from '../../store/filterSlice'


const CustomInput = () => {
    const {price} = useSelector(state => state.filter)
    const priceConst = useSelector(state => state.price)

    const dispatch = useDispatch()

    const onSetPrice = (value) => {
        dispatch(setPrice(value))
    }

    return <>
        <div className={"w-full my-2"}>
            <Slider
                className={"slider"}
                onChange={onSetPrice}
                value={price}
                min={priceConst[0]}
                max={priceConst[1]}/>
            <div className={"flex justify-between gap-2 w-full"}>
                <input
                    className={"p-2 border slider-input flex-auto"}
                    onChange={(e) => onSetPrice([e.target.value, price[1]])}
                    value={price[0]}
                    type="text"/>
                <span className={"flex justify-center items-center"}>-</span>
                <input
                    className={"p-2 border slider-input flex-auto"}
                    onChange={(e) => onSetPrice([price[0], e.target.value])}
                    value={price[1]}
                    type="text"/>
            </div>
        </div>
    </>
}

export default CustomInput