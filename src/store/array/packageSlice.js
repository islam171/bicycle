import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";


export const fetchPackage = createAsyncThunk(
    "price/fetchPackages",
    async function (_, {rejectWithValue}){
        try {
            const response = await axios.get(`http://localhost:3001/api/v1/package`)
            if(response.statusText !== 'OK'){
                throw new Error('ServerError!')
            }

            return response.data
        }catch(e){
            return rejectWithValue(e.message)
        }

    }
)

export const addPackage = createAsyncThunk(
    "package/addPackage",
    async function ({values, token}, {rejectWithValue}) {
        try {
            const formData = new FormData();
            formData.append("name", values.name);
            const response = await axios.post(`http://localhost:3001/api/v1/package`, formData,
                {headers: {'Authorization': token,}})

            if (response.statusText !== 'OK') {
                throw new Error('ServerError!')
            }
            return response.data
        } catch (e) {
            return rejectWithValue(e.message)
        }

    }
)

export const deletePackage = createAsyncThunk(
    "package/deletePackage",
    async function ({_id, token}, {rejectWithValue}) {
        try {
            const response = await axios.delete(`http://localhost:3001/api/v1/package/${_id}`,
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

export const updatePackage = createAsyncThunk(
    "package/updatePackage",
    async function ({_id, token, values}, {rejectWithValue}) {
        try {
            const formData = new FormData();
            formData.append("name", values.name);
            const response = await axios.patch(`http://localhost:3001/api/v1/package/${_id}`, formData,
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


const filterListSlice = createSlice({
    name: "filterList",
    initialState: {
        packages: [],
        error: null,
        status: null,
    },
    extraReducers: {
        [fetchPackage.pending]: (state, action) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchPackage.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.error = null;
            state.packages = action.payload;
        },
        [fetchPackage.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },

        [addPackage.pending]: (state, action) => {
            state.status = 'loading';
            state.error = null;
        },
        [addPackage.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.error = null;
            state.packages = [...state.packages, action.payload];
        },
        [addPackage.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },

        [deletePackage.pending]: (state, action) => {
            state.status = 'loading';
            state.error = null;
        },
        [deletePackage.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.error = null;
            state.packages = state.packages.filter(pack => pack._id !== action.payload._id)
        },
        [deletePackage.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },

        [updatePackage.pending]: (state, action) => {
            state.status = 'loading';
            state.error = null;
        },
        [updatePackage.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.error = null;
            let oldPackage = state.packages.filter(pack => pack._id !== action.payload._id)
            state.packages = [...oldPackage, action.payload]
        },
        [updatePackage.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        }
    }
})

export const {addCategoryFilterList} = filterListSlice.actions
export default filterListSlice.reducer