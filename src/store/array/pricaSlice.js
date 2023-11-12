import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

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
        price: [],
        error: null,
        status: null,
    },
    extraReducers: {
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

export const {addCategoryFilterList} = filterListSlice.actions
export default filterListSlice.reducer