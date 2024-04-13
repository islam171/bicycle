import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { baseURL } from '../../../store/api'

export const getBicycles = createAsyncThunk(
	'bicycle/getBicycles',
	async function (query, { rejectWithValue }) {
		try {
			const response = await axios.get(
				`${baseURL}/api/v1/bicycle?_category=${query.category}&_search=${query.search}&_sort=${query.sort}&_order=${query.order}&_color=${query.color}&_frameMaterial=${query.material}&_maxPrice=${query.maxPrice}&_minPrice=${query.minPrice}&_page=${query.page}&_limit=${query.limit}`
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
