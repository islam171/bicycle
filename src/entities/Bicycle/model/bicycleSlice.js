import { createSlice } from '@reduxjs/toolkit'
import { getBicycles } from '../api'

const bicycleSlice = createSlice({
	name: 'bicycle',
	initialState: {
		bicycles: [],
		error: null,
		isLoading: false
	},
	reducers: {},
	extraReducers: {
		[getBicycles.pending]: (state, action) => {
			state.isLoading = true
			state.error = null
		},
		[getBicycles.fulfilled]: (state, action) => {
			state.isLoading = false
			state.error = null
			state.bicycles = action.payload
		},
		[getBicycles.rejected]: (state, action) => {
			state.isLoading = false
			state.error = action.payload
		}
	}
})

export default bicycleSlice.reducer
