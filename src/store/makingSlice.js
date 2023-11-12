import {createSlice} from "@reduxjs/toolkit";



const makingSlice = createSlice({
    name: "making",
    initialState: {
        making: {},
        makingCart: {},
        totalPrice: 0,
        error: null,
        status: null,
    },
    reducers: {
        setMakingCart(state, action){
            console.log(action.payload)
            state.makingCart = Object.values(action.payload.carts)
            state.totalPrice = action.payload.totalPrice
        }
    }
})

export const {setMakingCart} = makingSlice.actions
export default makingSlice.reducer