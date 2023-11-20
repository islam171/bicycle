import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {baseURL} from "./api";

export const getBicycles = createAsyncThunk(
    "bicycle/getBicycles",
    async function (_, {rejectWithValue}) {
        try {
            const response = await axios.get(`${baseURL}/api/v1/bicycle`)
            if (response.statusText !== 'OK') {
                throw new Error('ServerError!')
            }

            return response.data
        } catch (e) {
            return rejectWithValue(e.message)
        }

    }
)





const bicycleSlice = createSlice({
    name: "bicycle",
    initialState: {
        bicycles: [],
        error: null,
        status: null
    },
    reducers: {},
    extraReducers: {
        [getBicycles.pending]: (state, action) => {
            state.status = 'loading';
            state.error = null;
        },
        [getBicycles.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.error = null;
            state.bicycles = action.payload;
        },
        [getBicycles.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        }
    }
})

export const {getBicycle} = bicycleSlice.actions
export default bicycleSlice.reducer