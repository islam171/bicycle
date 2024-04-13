import { createSlice } from '@reduxjs/toolkit'
import { addCart, deleteCart, getCart, removeCart, setCountCart } from '../api'

const getTotalPrice = state => {
	return state.carts.reduce((sum, obj) => {
		return obj.bicycle.price * obj.count + sum
	}, 0)
}

const getTotalCount = state => {
	return (state.totalCount = state.carts.reduce((sum, obj) => {
		return obj.count + sum
	}, 0))
}

const getFindCart = (carts, id) => {
	return carts.filter(item => item._id === id)
}

const filterCart = (state, id) => {
	return state.carts.filter(item => item._id !== id)
}

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		carts: [],
		totalCount: 0,
		totalPrice: 0
	},
	extraReducers: {
		//getCart
		[getCart.pending]: (state, action) => {
			state.status = 'loading'
			state.error = null
		},
		[getCart.fulfilled]: (state, action) => {
			state.status = 'resolved'
			state.error = null

			state.carts = action.payload.map(item => {
				return {
					_id: item.bicycle._id,
					bicycle: item.bicycle,
					count: item.count
				}
			})

			state.totalPrice = getTotalPrice(state)
			state.totalCount = getTotalCount(state)
		},
		[getCart.rejected]: (state, action) => {
			state.status = 'rejected'
			state.error = action.payload
		},
		//addCart
		[addCart.pending]: (state, action) => {
			state.status = 'loading'
			state.error = null
		},
		[addCart.fulfilled]: (state, action) => {
			state.status = 'resolved'
			state.error = null
			const findCart = getFindCart(state.carts, action.payload._id)

			if (findCart) {
				findCart.count++
			} else {
				state.carts = [
					...state.carts,
					{ _id: action.payload._id, count: 1, item: action.payload }
				]
			}
			state.totalPrice = getTotalPrice(state)
			state.totalCount = getTotalCount(state)
		},
		[addCart.rejected]: (state, action) => {
			state.status = 'rejected'
			state.error = action.payload
		},
		// deleteCart
		[deleteCart.pending]: (state, action) => {
			state.status = 'loading'
			state.error = null
		},
		[deleteCart.fulfilled]: (state, action) => {
			state.status = 'resolved'
			state.error = null

			const findCart = getFindCart(state, action.payload._id)
			if (findCart) {
				findCart.count--
			} else {
				state.carts = filterCart(state, action.payload._id)
			}
		},
		[deleteCart.rejected]: (state, action) => {
			state.status = 'rejected'
			state.error = action.payload
		},
		//removeCart
		[removeCart.pending]: (state, action) => {
			state.status = 'loading'
			state.error = null
		},
		[removeCart.fulfilled]: (state, action) => {
			state.status = 'resolved'
			state.error = null
			state.carts = filterCart(state, action.payload._id)
		},
		[removeCart.rejected]: (state, action) => {
			state.status = 'rejected'
			state.error = action.payload
		},
		[setCountCart.pending]: (state, action) => {
			state.status = 'loading'
			state.error = null
		},
		[setCountCart.fulfilled]: (state, action) => {
			state.status = 'resolved'
			state.error = null
			const findCart = getFindCart(state, action.payload._id)
			if (findCart) {
				findCart.count = action.payload.count
			}
		},
		[setCountCart.rejected]: (state, action) => {
			state.status = 'rejected'
			state.error = action.payload
		}
	}
})

export default cartSlice.reducer
