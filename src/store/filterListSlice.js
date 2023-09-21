import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCategory = createAsyncThunk(
    "category/fetchCategory",
    async function (_, {rejectWithValue}){
        try {
            const response = await axios.get(`http://localhost:3001/api/v1/category`)
            if(response.statusText !== 'OK'){
                throw new Error('ServerError!')
            }

            return response.data
        }catch(e){
            return rejectWithValue(e.message)
        }

    }
)

export const fetchColor = createAsyncThunk(
    "color/fetchColor",
    async function (_, {rejectWithValue}){
        try {
            const response = await axios.get(`http://localhost:3001/api/v1/color`)
            if(response.statusText !== 'OK'){
                throw new Error('ServerError!')
            }

            return response.data
        }catch(e){
            return rejectWithValue(e.message)
        }

    }
)

export const fetchMaterial = createAsyncThunk(
    "color/fetchMaterial",
    async function (_, {rejectWithValue}){
        try {
            const response = await axios.get(`http://localhost:3001/api/v1/frame`)
            if(response.statusText !== 'OK'){
                throw new Error('ServerError!')
            }

            return response.data
        }catch(e){
            return rejectWithValue(e.message)
        }

    }
)
export const fetchPrice = createAsyncThunk(
    "price/fetchPrice",
    async function (_, {rejectWithValue}){
        try {
            const response = await axios.get(`http://localhost:3001/api/v1/bicycle/price`)
            if(response.statusText !== 'OK'){
                throw new Error('ServerError!')
            }

            return response.data
        }catch(e){
            return rejectWithValue(e.message)
        }

    }
)

const filterListSlice = createSlice({
    name: "filterList",
    initialState: {
        categories: [],
        colors: [],
        materials: [],
        price: [],
        error: null,
        status: null
    },
    reducers: {
    },
    extraReducers: {
        [fetchCategory.pending]: (state, action) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchCategory.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.error = null;
            state.categories = action.payload;
        },
        [fetchCategory.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
        [fetchColor.pending]: (state, action) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchColor.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.error = null;
            state.colors = action.payload;
        },
        [fetchColor.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
        [fetchMaterial.pending]: (state, action) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchMaterial.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.error = null;
            state.materials = action.payload;
        },
        [fetchMaterial.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
        [fetchPrice.pending]: (state, action) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchPrice.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.error = null;
            state.price = [action.payload.min, action.payload.max];
        },
        [fetchPrice.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        }
    }
})

export default filterListSlice.reducer