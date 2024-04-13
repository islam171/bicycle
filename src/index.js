import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { store, persistor } from './store/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from '@mui/material'
import { themeProvider } from './app/providers/ThemeProvider'
import router from './app/appRouter'
import { RouterProvider } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<Provider store={store}>
		<PersistGate persistor={persistor}>
			<ThemeProvider theme={themeProvider}>
				<RouterProvider router={router} />
			</ThemeProvider>
		</PersistGate>
	</Provider>
)
