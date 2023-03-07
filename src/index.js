import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom'
import { store } from './reducers'
import { Provider } from 'react-redux'
import router from './pages/router/Router';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<RouterProvider router={router} />
	</Provider >
);

