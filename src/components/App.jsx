import './app.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react'
import Navbar from "./navbar/navbar";
import Registration from './authorization/Registration';
import Login from './authorization/Login';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { auth } from './../actions/user';
import Disk from './disk/Disk';
import Profile from './profile/Profile'

function App() {
	const isAuth = useSelector(state => state.user.isAuth)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(auth())
	}, [])

	return (
		<BrowserRouter  >
			<div className="app">
				<Navbar />
				<div className="wrap">

					{!isAuth &&
						<Routes>
							<Route path="/login" element={<Login />}></Route>
							<Route path="/registration" element={<Registration />}></Route>
						</Routes>
					}
					{isAuth &&
						<Routes>
							<Route path="*" element={<Disk />}>	</Route>
							<Route path="/profile" element={<Profile />}>	</Route>
						</Routes>
					}

				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
