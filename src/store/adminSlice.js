import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const getIsAdmin = createAsyncThunk(
    'admin/getIsAdmin',
    async function(token, {rejectWithValue}){
        try {
            const response = await axios.get(`http://localhost:3001/api/v1/isAdmin`, {headers: {'Authorization': token}})
            if(response.status === 403){
                return false
            }
            if(response.statusText !== 'OK'){
                throw new Error('ServerError!')
            }
            return true
        }catch(e){
            return rejectWithValue(e.message)
        }
    }
)


export const fetchBicyclesAdmin = createAsyncThunk(
    "admin/fetchBicyclesAdmin",
    async function (obj, {rejectWithValue}) {
        try {
            const response = await axios.get(`http://localhost:3001/api/v1/bicycle?_category=${obj.category}&_search=${obj.search}&_sort=${obj.sort}&_order=${obj.order}&_color=${obj.color}&_frameMaterial=${obj.material}&_maxPrice=${obj.maxPrice}&_minPrice=${obj.minPrice}&_page=${obj.page}&_limit=${obj.limit}`)
            if (response.statusText !== 'OK') {
                throw new Error('ServerError!')
            }
            return response.data
        } catch (e) {
            return rejectWithValue(e.message)
        }

    }
)

export const getCountBicyclesAdmin = createAsyncThunk(
    "admin/getCountBicyclesAdmin",
    async function (obj, {rejectWithValue}) {
        try {
            const response = await axios.get(`http://localhost:3001/api/v1/bicycle?_category=${obj.category}&_search=${obj.search}&_sort=${obj.sort}&_order=${obj.order}&_color=${obj.color}&_frameMaterial=${obj.material}&_maxPrice=${obj.maxPrice}&_minPrice=${obj.minPrice}`)
            if (response.statusText !== 'OK') {
                throw new Error('ServerError!')
            }
            return response.data
        } catch (e) {
            return rejectWithValue(e.message)
        }

    }
)

export const deleteBicyclesAdmin = createAsyncThunk(
    "admin/deleteBicyclesAdmin",
    async function ({id, token}, {rejectWithValue}) {
        try {
            const response = await axios.delete(`http://localhost:3001/api/v1/bicycle/${id}`, {headers: {'Authorization': token}})
            if (response.statusText !== 'OK') {
                throw new Error('ServerError!')
            }
            return id
        } catch (e) {
            return rejectWithValue(e.message)
        }

    }
)
export const updateBicyclesAdmin = createAsyncThunk(
    "admin/updateBicyclesAdmin",
    async function ({id, token, data}, {rejectWithValue}) {
        try {
            const formData = new FormData();

            formData.append("image", data.image[0]);
            formData.append("SpeedsNumber", data.SpeedsNumber);
            formData.append("WheelDiameter", data.WheelDiameter);
            formData.append("name", data.name);
            formData.append("price", data.price);
            formData.append("description", data.description);
            formData.append("modelYear", data.modelYear);
            formData.append("frameSize", data.frameSize);
            formData.append("colorId", data.colorId);
            formData.append("categoryId", data.categoryId);
            formData.append("frameMaterialId", data.frameMaterialId);
            formData.append("folding", data.folding);
            formData.append("seat", data.seat);

            const response = await axios.patch(`http://localhost:3001/api/v1/bicycle/${id}`, formData, {headers: {'Authorization': token}})
            if (response.statusText !== 'OK') {
                throw new Error('ServerError!')
            }
            return response.data
        } catch (e) {
            return rejectWithValue(e.message)
        }

    }
)

export const addBicycles = createAsyncThunk(
    "admin/addBicycles",
    async function ({values, token}, {rejectWithValue}) {
        try {
            const formData = new FormData();

            for(let file of values.image) {
                formData.append('image', file);
            }
            formData.append("SpeedsNumber", values.SpeedsNumber);
            formData.append("WheelDiameter", values.WheelDiameter);
            formData.append("name", values.name);
            formData.append("price", values.price);
            formData.append("description", values.description);
            formData.append("modelYear", values.modelYear);
            formData.append("frameSize", values.frameSize);
            formData.append("colors", JSON.stringify(values.colors));
            formData.append("categoryId", values.categoryId);
            formData.append("frameMaterialId", values.frameMaterialId);
            formData.append("folding", values.folding);
            formData.append("seat", values.seat);

            const response = await axios.post(`http://localhost:3001/api/v1/bicycle`, formData,
                {headers: {
                        'Authorization': token,
                        "Content-Type": "multipart/form-data",
                        "x-rapidapi-host": "file-upload8.p.rapidapi.com",
                        "x-rapidapi-key": "your-rapidapi-key-here",}})

            if (response.statusText !== 'OK') {
                throw new Error('ServerError!')
            }
            return response.data
        } catch (e) {
            return rejectWithValue(e.message)
        }

    }
)





const adminSlice = createSlice({
    name: "admin",
    initialState:{
        isAdmin: false,
        status: null,
        error: null,
        bicycles: [],
        count: 0,
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
        prevPage(state, action){
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
            state.countBicycle = 0

        },
        logoutAdmin(state, action){
            state.isAdmin = false
        }
    },
    extraReducers: {
        [getIsAdmin.pending]: (state, action) => {
            state.status = 'loading';
            state.error = null;
        },
        [getIsAdmin.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.error = null;
            state.isAdmin = action.payload;
        },
        [getIsAdmin.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
        [fetchBicyclesAdmin.pending]: (state, action) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchBicyclesAdmin.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.error = null;
            state.bicycles = action.payload;
        },
        [fetchBicyclesAdmin.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
        [getCountBicyclesAdmin.pending]: (state, action) => {
            state.status = 'loading';
            state.error = null;
        },
        [getCountBicyclesAdmin.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.error = null;
            state.countBicycle = action.payload.length;
        },
        [getCountBicyclesAdmin.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
        [deleteBicyclesAdmin.pending]: (state, action) => {
            state.status = 'loading';
            state.error = null;
        },
        [deleteBicyclesAdmin.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.error = null;
            let oldBicycles = [
                ...state.bicycles
            ]
            state.bicycles = oldBicycles.filter(bicycle => bicycle._id !== action.payload)

        },
        [deleteBicyclesAdmin.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
        [updateBicyclesAdmin.pending]: (state, action) => {
            state.status = 'loading';
            state.error = null;
        },
        [updateBicyclesAdmin.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.error = null;
            console.log(action.payload)

        },
        [updateBicyclesAdmin.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
        [addBicycles.pending]: (state, action) => {
            state.status = 'loading';
            state.error = null;
        },
        [addBicycles.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.error = null;
            state.bicycles = [...state.bicycles, action.payload];
        },
        [addBicycles.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        }
    }
})

export const {setSearch, setSort, setOrder, setCategory, setColor, setMaterial, setPrice, clearState, nextPage, prevPage, setLimit, setFirstPage, logoutAdmin} = adminSlice.actions
export default adminSlice.reducer
