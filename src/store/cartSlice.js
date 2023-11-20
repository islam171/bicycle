import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {baseURL} from "./api";

export const getCart = createAsyncThunk(
    "cart/getCart",
    async function(token, {rejectWithValue}){
        try{
            const response = await axios.get(`${baseURL}/api/v1/cart`, {headers: {'Authorization': token}})
            if(response.statusText !== 'OK'){
                throw new Error('ServerError!')
            }
            return response.data
        }catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

export const addCart = createAsyncThunk(
    "cart/addCart",
    async function({token, bike}, {rejectWithValue}){
        try{
            const response = await axios.post(`${baseURL}/api/v1/cart/${bike._id}`, {},{headers: {'Authorization': token}})
            if(response.statusText !== 'OK'){
                throw new Error('ServerError!')
            }
            return response.data
        }catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

export const deleteCart = createAsyncThunk(
    "cart/deleteCart",
    async function({token, bike}, {rejectWithValue}){
        try{
            const response = await axios.patch(`${baseURL}/api/v1/cart/${bike._id}`, {},{headers: {'Authorization': token}})
            if(response.statusText !== 'OK'){
                throw new Error('ServerError!')
            }
            return response.data
        }catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

export const setCountCart = createAsyncThunk(
    "cart/setCart",
    async function({token, bike, count}, {rejectWithValue}){
        try{
            const response = await axios.patch(`${baseURL}/api/v1/cart/set/${bike._id}`, {count},{headers: {'Authorization': token}})
            if(response.statusText !== 'OK'){
                throw new Error('ServerError!')
            }
            return response.data
        }catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

export const removeCart = createAsyncThunk(
    "cart/removeCart",
    async function({token, bike}, {rejectWithValue}){
        try{
            const response = await axios.delete(`${baseURL}/api/v1/cart/${bike._id}`,{headers: {'Authorization': token}})
            if(response.statusText !== 'OK'){
                throw new Error('ServerError!')
            }
            return bike
        }catch (e) {
            return rejectWithValue(e.message)
        }
    }
)


const cartSlice = createSlice({
    name: "cart",
    initialState:{
        carts: {},
        totalCount: 0,
        totalPrice: 0
    },
    reducers: {
        setCart(state, action){
            state.carts = {
                [action.payload._id]: action.payload
            }
        },
        addCart(state, action){
            state.carts = {...state.carts, [action.payload._id]: {cart: action.payload, count: !state.carts[action.payload._id] ? 1 : state.carts[action.payload._id].count + 1}}
        },
        clearCart(state, action){
            state.carts = {}
            state.totalCount = 0
            state.totalPrice = 0
        },
        removeCart(state, action){
            const newItem = {
                ...state.carts
            }
            delete newItem[action.payload._id]
            state.carts = newItem
        },
        deleteCart(state, action){
            state.carts = {...state.carts, [action.payload._id]: {bicycle: action.payload, count: state.carts[action.payload._id].count <= 1 ? 1 : state.carts[action.payload._id].count - 1}}
        }
    },
    extraReducers: {
        //getCart
        [getCart.pending]: (state, action) => {
            state.status = 'loading';
            state.error = null
        },
        [getCart.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.error = null;
            let newCart = {}

            for(let i = 0; i < action.payload.length; i++){
                newCart = {...newCart, [action.payload[i].bicycle._id]: {cart: action.payload[i], count: action.payload[i].count}}
            }
            // console.log(newCart)
            state.carts = newCart

            const items = Object.keys(state.carts).map(key => {
                return state.carts[key]
            })
            let newTotalCount = 0
            let newTotalPrice = 0
            items.map((item) => {
                newTotalCount += item.cart.count
                newTotalPrice += item.cart.bicycle.price * item.cart.count
            })
            state.totalCount = newTotalCount
            state.totalPrice = newTotalPrice
        },
        [getCart.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
        //addCart
        [addCart.pending]: (state, action) => {
            state.status = 'loading';
            state.error = null
        },
        [addCart.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.error = null;
            // !state.carts[action.payload.bicycle._id] ? 1 : state.carts[action.payload.bicycle._id].count + 1
            state.carts = {...state.carts, [action.payload.bicycle._id]: {cart: action.payload, count: action.payload.count}}

            const items = Object.keys(state.carts).map(key => {
                return state.carts[key]
            })
            let newTotalCount = 0
            let newTotalPrice = 0
            items.map((item) => {
                newTotalCount += item.cart.count
                newTotalPrice += item.cart.bicycle.price * item.cart.count
            })
            state.totalCount = newTotalCount
            state.totalPrice = newTotalPrice
        },
        [addCart.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
        // deleteCart
        [deleteCart.pending]: (state, action) => {
            state.status = 'loading';
            state.error = null
        },
        [deleteCart.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.error = null;
            state.carts = {...state.carts, [action.payload.bicycle._id]: {cart: action.payload, count: action.payload.count}}

            const items = Object.keys(state.carts).map(key => {
                return state.carts[key]
            })
            let newTotalCount = 0
            let newTotalPrice = 0
            items.map((item) => {
                newTotalCount += item.cart.count
                newTotalPrice += item.cart.bicycle.price * item.cart.count
            })
            state.totalCount = newTotalCount
            state.totalPrice = newTotalPrice
        },
        [deleteCart.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
        //removeCart
        [removeCart.pending]: (state, action) => {
            state.status = 'loading';
            state.error = null
        },
        [removeCart.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.error = null;
            const newItem = {
                ...state.carts
            }
            delete newItem[action.payload._id]
            state.carts = newItem

            const items = Object.keys(state.carts).map(key => {
                return state.carts[key]
            })
            let newTotalCount = 0
            let newTotalPrice = 0
            items.map((item) => {
                newTotalCount += item.cart.count
                newTotalPrice += item.cart.bicycle.price * item.cart.count
            })
            state.totalCount = newTotalCount
            state.totalPrice = newTotalPrice
        },
        [removeCart.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
        //setCountCart
        [setCountCart.pending]: (state, action) => {
            state.status = 'loading';
            state.error = null
        },
        [setCountCart.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.error = null;
            // state.carts = {...state.carts, [action.payload.bicycle._id]: {cart: action.payload, count: state.carts[action.payload.bicycle._id].count <= 1 ? 1 : state.carts[action.payload.bicycle._id].count - 1}}

            const items = Object.keys(state.carts).map(key => {
                return state.carts[key]
            })
            let newTotalCount = 0
            let newTotalPrice = 0
            items.map((item) => {
                newTotalCount += item.cart.count
                newTotalPrice += item.cart.bicycle.price * item.cart.count
            })
            state.totalCount = newTotalCount
            state.totalPrice = newTotalPrice
        },
        [setCountCart.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
    }
})

export const {setCart, clearCart} = cartSlice.actions
export default cartSlice.reducer