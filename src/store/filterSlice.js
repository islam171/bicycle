import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {baseURL} from "./api";

export const fetchBicycles = createAsyncThunk(
    "filter/fetchBicycles",
    async function (obj, {rejectWithValue}) {
        try {
            const response = await axios.get(`${baseURL}/api/v1/bicycle?_category=${obj.category}&_search=${obj.search}&_sort=${obj.sort}&_order=${obj.order}&_color=${obj.color}&_frameMaterial=${obj.material}&_maxPrice=${obj.maxPrice}&_minPrice=${obj.minPrice}&_page=${obj.page}&_limit=${obj.limit}`)
            if (response.statusText !== 'OK') {
                throw new Error('ServerError!')
            }
            return response.data
        } catch (e) {
            return rejectWithValue(e.message)
        }

    }
)

export const getCountBicycles = createAsyncThunk(
    "filter/getCountBicycles",
    async function (_, {rejectWithValue}) {
        try {
            const response = await axios.get(`${baseURL}/api/v1/bicycle`)
            if (response.statusText !== 'OK') {
                throw new Error('ServerError!')
            }
            return response.data.length
        } catch (e) {
            return rejectWithValue(e.message)
        }

    }
)

const filterSlice = createSlice({
    name: "filter",
    initialState: {
        bicycles: [],
        error: null,
        status: null,
        search: '',
        sort: '_id',
        order: 'ASC',
        color: '',
        category: '',
        material: '',
        price: [0, 1000000],
        limit: 20,
        page: 1,
        countBicycle: 0
    },
    reducers: {
        setSearch(state, action){
            state.search = action.payload
        },
        setSort(state, action){
            state.sort = action.payload
        },
        setOrder(state, action){
            state.order = action.payload
        },
        setCategory(state, action){
            state.category = action.payload
        },
        setColor(state, action){
            state.color = action.payload
        },
        setMaterial(state, action){
            state.material = action.payload
        },
        setPrice(state, action){
            state.price = action.payload
        },
        setLimit(state, action){
            state.limit = action.payload
        },
        nextPage(state, action){
            state.page = (state.page + 1 > Math.ceil(state.countBicycle / state.limit))? state.page : state.page + 1
        },
        minusPage(state, action){
            state.page = (state.page - 1 <= 0)? state.page : state.page - 1
        },
        setFirstPage(state, action){
            state.page = 1
        },
        clearState(state, action){
            state.search = ''
            state.sort = '_id'
            state.order = 'ASC'
            state.color = ''
            state.category = ''
            state.material = ''
            state.limit = 20
            state.page = 1
            state.price = [0, 1000000]
        }
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
        },
        [getCountBicycles.pending]: (state, action) => {
            state.status = 'loading';
            state.error = null;
        },
        [getCountBicycles.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.error = null;
            state.countBicycle = action.payload;
        },
        [getCountBicycles.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
    }
})

export const {setSearch, setSort, setOrder, setCategory, setColor, setMaterial, setPrice, clearState, nextPage, minusPage, setLimit, setFirstPage} = filterSlice.actions
export default filterSlice.reducer