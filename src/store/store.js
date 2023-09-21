import {configureStore} from '@reduxjs/toolkit'
import sideSlice from './sidebarSlice'
import filterSlice from "./filterSlice";
import bicycleSlice from "./bicycleSlice";
import filterListSlice from "./filterListSlice";

export default configureStore({
    reducer: {
        sideBar: sideSlice,
        filter: filterSlice,
        bicycle: bicycleSlice,
        filterList: filterListSlice
    }
})