import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {baseURL} from "../api";

export const fetchCategory = createAsyncThunk(
    "category/fetchCategory",
    async function (_, {rejectWithValue}){
        try {
            const response = await axios.get(`${baseURL}/api/v1/category`)
            if(response.statusText !== 'OK'){
                throw new Error('ServerError!')
            }

            return response.data
        }catch(e){
            return rejectWithValue(e.message)
        }

    }
)

export const addCategory = createAsyncThunk(
    "category/addCategory",
    async function ({values, token}, {rejectWithValue}) {
        try {
            const formData = new FormData();
            formData.append("name", values.name);
            const response = await axios.post(`${baseURL}/api/v1/category`, formData,
                {headers: {'Authorization': token}})

            if (response.statusText !== 'OK') {
                throw new Error('ServerError!')
            }
            return response.data
        } catch (e) {
            return rejectWithValue(e.message)
        }

    }
)
export const deleteCategory = createAsyncThunk(
    "category/deleteCategory",
    async function ({_id, token}, {rejectWithValue}) {
        try {
            const response = await axios.delete(`${baseURL}/api/v1/category/${_id}`,
                {headers: {'Authorization': token}})

            if (response.statusText !== 'OK') {
                throw new Error('ServerError!')
            }
            return {_id}
        } catch (e) {
            return rejectWithValue(e.message)
        }

    }
)

export const updateCategory = createAsyncThunk(
    "category/updateCategory",
    async function ({_id, token, values}, {rejectWithValue}) {
        try {
            const formData = new FormData();
            formData.append("name", values.name);
            const response = await axios.patch(`${baseURL}/api/v1/category/${_id}`, formData,
                {headers: {'Authorization': token}})

            if (response.statusText !== 'OK') {
                throw new Error('ServerError!')
            }
            return response.data
        } catch (e) {
            return rejectWithValue(e.message)
        }

    }
)


const categorySlice = createSlice({
    name: "category",
    initialState: {
        categories: [],
        error: null,
        status: null,
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

        [addCategory.pending]: (state, action) => {
            state.status = 'loading';
            state.error = null;
        },
        [addCategory.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.error = null;
            state.categories = [...state.categories, action.payload]
        },
        [addCategory.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },

        [deleteCategory.pending]: (state, action) => {
            state.status = 'loading';
            state.error = null;
        },
        [deleteCategory.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.error = null;
            state.categories = state.categories.filter(cat => cat._id !== action.payload._id)
        },
        [deleteCategory.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },

        [updateCategory.pending]: (state, action) => {
            state.status = 'loading';
            state.error = null;
        },
        [updateCategory.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.error = null;
            let oldCategory = state.categories.filter(cat => cat._id !== action.payload._id)
            state.categories = [...oldCategory, action.payload]
        },
        [updateCategory.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        }
    }
})

// export const = categorySlice.actions
export default categorySlice.reducer