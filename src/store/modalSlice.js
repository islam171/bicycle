import {createSlice} from "@reduxjs/toolkit";


const modalSlice = createSlice({
    name: "modal",
    initialState: {
        isOpenUpdateModal: false,
        data: {},
        _id: '',
        func: ""
    },
    reducers: {
        openUpdateModal(state, action){
            state.isOpenUpdateModal = true
            state.data = action.payload.item
            state._id = action.payload.item._id
            state.func = action.payload.func
        },
        closeUpdateModal(state, action){
            state.isOpenUpdateModal = false
            state.data = {}
            state._id = ""
            state.func = ""
        }
    }
})

export const {openUpdateModal, closeUpdateModal} = modalSlice.actions
export default modalSlice.reducer