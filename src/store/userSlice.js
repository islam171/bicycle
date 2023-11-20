import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {getIsAdmin} from "./adminSlice";
import {baseURL} from "./api";

export const login = createAsyncThunk(
    "user/login",
    async function({username, password}, {rejectWithValue, dispatch}){
        try{
            const response = await axios.post(`${baseURL}/api/v1/auth/login`, {username, password})
            if(response.statusText !== 'OK'){
                throw new Error('ServerError!')
            }else{
                dispatch(getIsAdmin(response.data.token))
                dispatch(auth())
            }
            return response.data
        }catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

export const registerUser = createAsyncThunk(
    "user/register",
    async function({username, password}, {rejectWithValue, dispatch}){
        try{
            const response = await axios.post(`${baseURL}/api/v1/auth/register`, {username, password})
            if(response.statusText !== 'OK'){
                throw new Error('ServerError!')
            }

            return response.data
        }catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

export const getUserData = createAsyncThunk(
    "user/getUserData",
    async function(token, {rejectWithValue}){
        try{
            const response = await axios.get(`${baseURL}/api/v1/auth/me`, {headers: {"Authorization": token}})
            if(response.statusText !== 'OK'){
                throw new Error('ServerError!')
            }
            return response.data
        }catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

export const fetchUsers = createAsyncThunk(
    "user/fetchUser",
    async function (token, {rejectWithValue}){
        try {
            const response = await axios.get(`${baseURL}/api/v1/users`, {headers: {"Authorization": token}})
            if(response.statusText !== 'OK'){
                throw new Error('ServerError!')
            }

            return response.data
        }catch(e){
            return rejectWithValue(e.message)
        }

    }
)

export const addUser = createAsyncThunk(
    "user/addUser",
    async function ({values, token}, {rejectWithValue}) {
        try {
            const formData = new FormData();
            formData.append("name", values.name);
            const response = await axios.post(`${baseURL}/api/v1/user`, formData,
                {headers: {'Authorization': token}})

            if (response.statusText !== 'OK') {
                throw new Error('ServerError!')
            }
            return response.data
        } catch (e) {
            return rejectWithValue(e.message)
        }

    }
)
export const deleteUser = createAsyncThunk(
    "user/deleteUser",
    async function ({_id, token}, {rejectWithValue}) {
        try {
            const response = await axios.delete(`${baseURL}/api/v1/user/${_id}`,
                {headers: {'Authorization': token}})

            if (response.statusText !== 'OK') {
                throw new Error('ServerError!')
            }
            return {_id}
        } catch (e) {
            return rejectWithValue(e.message)
        }

    }
)

export const updateUser = createAsyncThunk(
    "user/updateUser",
    async function ({_id, token, values}, {rejectWithValue}) {
        try {
            const formData = new FormData();
            formData.append("username", values.username);
            formData.append("password", values.password);
            const response = await axios.patch(`${baseURL}/api/v1/user/${_id}`, formData,
                {headers: {'Authorization': token}})

            if (response.statusText !== 'OK') {
                throw new Error('ServerError!')
            }
            return response.data
        } catch (e) {
            return rejectWithValue(e.message)
        }

    }
)

const userSlice = createSlice({
    name: "user",
    initialState: {
        token: '',
        data: {},
        users: [],
        error: null,
        status: null,
        isAuth: false,
        message: ''
    },
    reducers: {
        logout(state, action){
            state.token = ''
            state.isAuth = false
        },
        auth(state, action){
            state.isAuth = true
        }
    },
    extraReducers: {
        [login.pending]: (state, action) => {
            state.status = 'loading';
            state.error = null;
        },
        [login.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.error = null;
            state.token = action.payload.token;
        },
        [login.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },

        [getUserData.pending]: (state, action) => {
            state.status = 'loading';
            state.error = null;
        },
        [getUserData.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.error = null;
            state.data = action.payload;
        },
        [getUserData.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
        [fetchUsers.pending]: (state, action) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchUsers.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.error = null;
            state.users = action.payload;
        },
        [fetchUsers.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
        [deleteUser.pending]: (state, action) => {
            state.status = 'loading';
            state.error = null;
        },
        [deleteUser.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.error = null;
            state.users = state.users.filter(user => user._id !== action.payload._id)
        },
        [deleteUser.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },

        [updateUser.pending]: (state, action) => {
            state.status = 'loading';
            state.error = null;
        },
        [updateUser.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.error = null;
            let users = state.users.filter(user => user._id !== action.payload._id)
            state.users = [...users, action.payload]
        },
        [updateUser.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },

        [registerUser.pending]: (state, action) => {
            state.status = 'loading';
            state.error = null;
        },
        [registerUser.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.error = null;
            state.message = "Добавлено"
        },
        [registerUser.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
            state.message = action.payload;
        }
    }

})

export const  {logout, auth} = userSlice.actions

export default userSlice.reducer