import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchColor = createAsyncThunk(
    "color/fetchColor",
    async function (_, {rejectWithValue}){
        try {
            const response = await axios.get(`http://localhost:3001/api/v1/color`)
            if (response.status === 400){
                throw new Error(response.request)
            }
            if(response.statusText !== 'OK'){
                throw new Error('ServerError!')
            }

            return response.data
        }catch(e){
            return rejectWithValue(e.message)
        }

    }
)

export const addColor = createAsyncThunk(
    "color/addColor",
    async function ({values, token}, {rejectWithValue}) {
        try {
            const formData = new FormData();
            formData.append("name", values.name);
            const response = await axios.post(`http://localhost:3001/api/v1/color`, formData,
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

export const deleteColor = createAsyncThunk(
    "material/deleteColor",
    async function ({_id, token}, {rejectWithValue}) {
        try {
            const response = await axios.delete(`http://localhost:3001/api/v1/color/${_id}`,
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

export const updateColor = createAsyncThunk(
    "material/updateColor",
    async function ({_id, token, values}, {rejectWithValue}) {
        try {
            const formData = new FormData();
            formData.append("name", values.name);
            const response = await axios.patch(`http://localhost:3001/api/v1/color/${_id}`, formData,
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


const colorSlice = createSlice({
    name: "color",
    initialState: {
        colors: [],
        error: null,
        status: null,
    },
    reducers: {
    },
    extraReducers: {
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

        [addColor.pending]: (state, action) => {
            state.status = 'loading';
            state.error = null;
        },
        [addColor.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.error = null;
            state.colors = [...state.colors, action.payload]
        },
        [addColor.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },

        [deleteColor.pending]: (state, action) => {
            state.status = 'loading';
            state.error = null;
        },
        [deleteColor.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.error = null;
            state.colors = state.colors.filter(color => color._id !== action.payload._id)
        },
        [deleteColor.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },

        [updateColor.pending]: (state, action) => {
            state.status = 'loading';
            state.error = null;
        },
        [updateColor.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.error = null;
            let oldColors = state.colors.filter(color => color._id !== action.payload._id)
            state.colors = [...oldColors, action.payload]
        },
        [updateColor.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        }
    }
})

// export const = colorSlice.actions
export default colorSlice.reducer