
import './app.scss';

import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';

import Sidebar from './Sidebar/Sidebar';
import Registration from './authorization/Registration';
import Login from './authorization/Login';
import Disk from './disk/Disk';
import Profile from './profile/Profile'

import { auth } from './../actions/user';
import Footer from './footer/Footer';
import Navbar from './navbar/Navbar';



function App() {
	const isAuth = useSelector(state => state.user.isAuth)
	const dispatch = useDispatch()

	useEffect(() => { dispatch(auth()) }, [])

	return (
		<BrowserRouter>
			<div className="app">
				{/* <Navbar /> */}
				<Sidebar />
				<section className="content">
					<Navbar />



					{/* {!isAuth &&
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
					} */}

				</section>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
