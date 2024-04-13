import { combineReducers, configureStore } from '@reduxjs/toolkit'
import sideSlice from './sidebarSlice'
import bicycleSlice from '../entities/Bicycle/model/bicycleSlice'
import cartSlice from '../entities/Cart/model/cartSlice'
import userSlice from './userSlice'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import orderSlice from './orderSlice'
import makingSlice from './makingSlice'
import adminSlice from './adminSlice'
import categorySlice from './array/categorySlice'
import colorSlice from './array/colorSlice'
import materialSlice from './array/mateiralSlice'
import packageSlice from './array/packageSlice'
import priceSlice from './array/pricaSlice'

const persistConfig = {
	key: 'root',
	storage
}

const reducer = combineReducers({
	sideBar: sideSlice,
	bicycle: bicycleSlice,
	cart: cartSlice,
	user: userSlice,
	order: orderSlice,
	making: makingSlice,
	admin: adminSlice,
	category: categorySlice,
	color: colorSlice,
	material: materialSlice,
	package: packageSlice,
	price: priceSlice
})

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: false
		})
})

export const persistor = persistStore(store)
