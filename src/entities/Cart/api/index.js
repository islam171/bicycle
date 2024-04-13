import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { baseURL } from '../../../store/api'

export const getCart = createAsyncThunk(
	'cart/getCart',
	async function (token, { rejectWithValue }) {
		try {
			const response = await axios.get(`${baseURL}/api/v1/cart`, {
				headers: { Authorization: token }
			})
			if (response.statusText !== 'OK') {
				throw new Error('ServerError!')
			}
			return response.data
		} catch (e) {
			return rejectWithValue(e.message)
		}
	}
)

export const addCart = createAsyncThunk(
	'cart/addCart',
	async function ({ token, bike }, { rejectWithValue }) {
		try {
			const response = await axios.post(
				`${baseURL}/api/v1/cart/${bike._id}`,
				{},
				{ headers: { Authorization: token } }
			)
			if (response.statusText !== 'OK') {
				throw new Error('ServerError!')
			}
			console.log(response.data)
			return response.data
		} catch (e) {
			return rejectWithValue(e.message)
		}
	}
)

export const deleteCart = createAsyncThunk(
	'cart/deleteCart',
	async function ({ token, bike }, { rejectWithValue }) {
		try {
			const response = await axios.patch(
				`${baseURL}/api/v1/cart/${bike._id}`,
				{},
				{ headers: { Authorization: token } }
			)
			if (response.statusText !== 'OK') {
				throw new Error('ServerError!')
			}
			return response.data
		} catch (e) {
			return rejectWithValue(e.message)
		}
	}
)

export const setCountCart = createAsyncThunk(
	'cart/setCart',
	async function ({ token, bike, count }, { rejectWithValue }) {
		try {
			const response = await axios.patch(
				`${baseURL}/api/v1/cart/set/${bike._id}`,
				{ count },
				{ headers: { Authorization: token } }
			)
			if (response.statusText !== 'OK') {
				throw new Error('ServerError!')
			}
			return response.data
		} catch (e) {
			return rejectWithValue(e.message)
		}
	}
)

export const removeCart = createAsyncThunk(
	'cart/removeCart',
	async function ({ token, bike }, { rejectWithValue }) {
		try {
			const response = await axios.delete(
				`${baseURL}/api/v1/cart/${bike._id}`,
				{ headers: { Authorization: token } }
			)
			if (response.statusText !== 'OK') {
				throw new Error('ServerError!')
			}
			return bike
		} catch (e) {
			return rejectWithValue(e.message)
		}
	}
)
