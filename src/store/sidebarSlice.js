import { createSlice } from '@reduxjs/toolkit'

const sideSlice = createSlice({
    name: 'sides',
    initialState: {
        isOpenSidebarFilter: false,
        isOpenSidebarMenu: false
    },
    reducers: {
        openSidebarFilter(state, action){
            state.isOpenSidebarFilter = true
        },
        closeSidebarFilter(state, action){
            state.isOpenSidebarFilter = false
        },
        toggleSidebarFilter(state, action){
            state.isOpenSidebarFilter = !state.isOpenSidebarFilter
        },
        openSidebarMenu(state, action){
            state.isOpenSidebarMenu = true
        },
        closeSidebarMenu(state, action){
            state.isOpenSidebarMenu = false
        },
        toggleSidebarMenu(state, action){
            state.isOpenSidebarMenu = !state.isOpenSidebarMenu
        }
    }
})

export const {openSidebarFilter, closeSidebarFilter, toggleSidebarFilter, openSidebarMenu, closeSidebarMenu, toggleSidebarMenu} = sideSlice.actions
export default sideSlice.reducer