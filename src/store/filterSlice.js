import {createSlice} from "@reduxjs/toolkit";


const filterSlice = createSlice({
    name: "filter",
    initialState: {
        search: '',
        sort: '_id',
        order: 'ASC',
        color: '',
        category: '',
        material: '',
        price: [12000, 100000]
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
        clearState(state, action){
            state.search = ''
            state.sort = '_id'
            state.order = 'ASC'
            state.color = ''
            state.category = ''
            state.material = ''
            state.price = [12000, 100000]
        }
    }
})

export const {setSearch, setSort, setOrder, setCategory, setColor, setMaterial, setPrice, clearState} = filterSlice.actions
export default filterSlice.reducer