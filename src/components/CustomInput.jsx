import Slider from 'react-slider'
import {useState} from "react";
import style from './CustomInput.css'
import {useDispatch, useSelector} from "react-redux";
import {setPrice, setPriceMax, setPriceMin} from './../store/filterSlice'


const CustomInput = () => {
    const {price} = useSelector(state => state.filter)
    const priceConst = useSelector(state => state.filterList.price)

    const dispatch = useDispatch()

    const onSetPrice = (value) => {
        dispatch(setPrice(value))
    }

    return <>
        <div className={"w-full my-2"}>
            <Slider className={"slider"} onChange={onSetPrice} value={price} min={priceConst[0]} max={priceConst[1]}/>
            <div className={"flex justify-between gap-5 w-full"}>
                <input className={"p-2 border slider-input"} onChange={(e) => onSetPrice([e.target.value, price[1]])} value={price[0]} type="text"/>
                <input className={"p-2 border slider-input"} onChange={(e) => onSetPrice([price[0], e.target.value])} value={price[1]} type="text"/>
            </div>
        </div>
    </>
}

export default CustomInput