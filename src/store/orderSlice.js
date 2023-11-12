import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const getOrders = createAsyncThunk(
    "order/getOrders",
    async function(token, {rejectWithValue}){
        try{
            const response = await axios.get('http://localhost:3001/api/v1/order', {headers: {"Authorization": token}})
            if(response.statusText !== 'OK'){
                throw new Error('ServerError!')
            }
            return response.data
        }catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

export const addOrder = createAsyncThunk(
    "order/addOrder",
    async function({token, data}, {rejectWithValue}){
        try{
            const response = await axios.post('http://localhost:3001/api/v1/order', data,{headers: {"Authorization": token}})
            if(response.statusText !== 'OK'){
                throw new Error('ServerError!')
            }
            return response.data
        }catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

export const getAddress = createAsyncThunk(
    "order/getAddress",
    async function(token, {rejectWithValue}){
        try{
            const response = await axios.get('http://localhost:3001/api/v1/address', {headers: {"Authorization": token}})
            if(response.statusText !== 'OK'){
                throw new Error('ServerError!')
            }
            return response.data
        }catch (e) {
            return rejectWithValue(e.message)
        }
    }
)


const orderSlice = createSlice({
    name: "order",
    initialState: {
        orders: [],
        error: null,
        status: null,
        addresses: []
    },
    reducers: {
        deleteAddress(state, action){
        }
    },
    extraReducers: {
        [getOrders.pending]: (state, action) => {
            state.status = 'loading';
            state.error = null;
        },
        [getOrders.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.error = null;
            state.orders = action.payload;
        },
        [getOrders.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
        [getAddress.pending]: (state, action) => {
            state.status = 'loading';
            state.error = null;
        },
        [getAddress.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.error = null;
            state.addresses = action.payload;
        },
        [getAddress.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        }
    }
})

// export const {deleteAddress} = orderSlice.actions
export default orderSlice.reducer