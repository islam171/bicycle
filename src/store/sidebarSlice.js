import { createSlice } from '@reduxjs/toolkit'

const sideSlice = createSlice({
    name: 'sides',
    initialState: {
        isOpenSidebarFilter: false,
        isOpenSidebarMenu: false,
        isOpenSidebarFilterAdmin: false,
        isOpenInputSidebar: false
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
        },
        openSidebarFilterAdmin(state, action){
            state.isOpenSidebarFilterAdmin = true
        },
        closeSidebarFilterAdmin(state, action){
            state.isOpenSidebarFilterAdmin = false
        },
        toggleSidebarFilterAdmin(state, action){
            state.isOpenSidebarFilterAdmin = !state.isOpenSidebarFilterAdmin
        },
        toggleInputSidebar(state, action){
            state.isOpenInputSidebar = !state.isOpenInputSidebar
        }
    }
})

export const {openSidebarFilter, closeSidebarFilter, toggleSidebarFilter, openSidebarMenu, closeSidebarMenu, toggleSidebarMenu, openSidebarFilterAdmin, closeSidebarFilterAdmin, toggleSidebarFilterAdmin, toggleInputSidebar} = sideSlice.actions
export default sideSlice.reducer