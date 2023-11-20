import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {baseURL} from "../api";

export const fetchMaterial = createAsyncThunk(
    "material/fetchMaterial",
    async function (_, {rejectWithValue}){
        try {
            const response = await axios.get(`${baseURL}/api/v1/frame`)
            if(response.statusText !== 'OK'){
                throw new Error('ServerError!')
            }

            return response.data
        }catch(e){
            return rejectWithValue(e.message)
        }

    }
)

export const addMaterial = createAsyncThunk(
    "material/addMaterial",
    async function ({values, token}, {rejectWithValue}) {
        try {
            const formData = new FormData();
            formData.append("name", values.name);
            const response = await axios.post(`${baseURL}/api/v1/material`, formData,
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

export const deleteMaterial = createAsyncThunk(
    "material/deleteMaterial",
    async function ({_id, token}, {rejectWithValue}) {
        try {
            const response = await axios.delete(`${baseURL}/api/v1/frame/${_id}`,
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

export const updateMaterial = createAsyncThunk(
    "material/updateMaterial",
    async function ({_id, token, values}, {rejectWithValue}) {
        try {
            const formData = new FormData();
            formData.append("name", values.name);
            const response = await axios.patch(`${baseURL}/api/v1/frame/${_id}`, formData,
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


const materialSlice = createSlice({
    name: "material",
    initialState: {
        materials: [],
        error: null,
        status: null,
    },
    reducers: {
    },
    extraReducers: {
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

        [addMaterial.pending]: (state, action) => {
            state.status = 'loading';
            state.error = null;
        },
        [addMaterial.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.error = null;
            state.materials = [...state.materials, action.payload]
        },
        [addMaterial.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },

        [deleteMaterial.pending]: (state, action) => {
            state.status = 'loading';
            state.error = null;
        },
        [deleteMaterial.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.error = null;
            state.materials = state.materials.filter(mat => mat._id !== action.payload._id)
        },
        [deleteMaterial.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },

        [updateMaterial.pending]: (state, action) => {
            state.status = 'loading';
            state.error = null;
        },
        [updateMaterial.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.error = null;
            let oldMaterial = state.materials.filter(mat => mat._id !== action.payload._id)
            state.materials = [...oldMaterial, action.payload]
        },
        [updateMaterial.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        }
    }
})

// export const = materialSlice.actions
export default materialSlice.reducer