import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBicycles = createAsyncThunk(
    "bicycle/fetchBicycles",
    async function (obj, {rejectWithValue}){
        try {
            const response = await axios.get(`http://localhost:3001/api/v1/bicycle?_category=${obj.category}&_search=${obj.search}&_sort=${obj.sort}&_order=${obj.order}&_color=${obj.color}&_frameMaterial=${obj.material}&_maxPrice=${obj.maxPrice}&_minPrice=${obj.minPrice}`)
            if(response.statusText !== 'OK'){
                throw new Error('ServerError!')
            }

            return response.data
        }catch(e){
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
    reducers: {
    },
    extraReducers: {
        [fetchBicycles.pending]: (state, action) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchBicycles.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.error = null;
            state.bicycles = action.payload;
        },
        [fetchBicycles.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        }
    }
})

export const {getBicycle} = bicycleSlice.actions
export default bicycleSlice.reducer