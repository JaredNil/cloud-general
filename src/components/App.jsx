
import './app.scss';

import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';

import Sidebar from './sidebar/Sidebar';
// import Registration from './authorization/Registration';
// import Login from './authorization/Login';
// import Disk from './disk/Disk';
// import Profile from './profile/Profile'

import { auth } from './../actions/user';
import Footer from './footer/Footer';
import Navbar from './navbar/Navbar';
import Disk from './disk/Disk';
import LabelPathBar from './labelPathBar/LabelPathBar';
import Input from './../utils/input/Input';
import Content from './content/Content';



function App() {
	// const isAuth = useSelector(state => state.user.isAuth)
	const isAuth = true
	const dispatch = useDispatch()

	useEffect(() => { dispatch(auth()) }, [])

	return (
		<div className="app">
			{/* <Navbar /> */}
			<Sidebar isAuth={isAuth} />
			<section className="content">
				<Navbar>
					<Input />
				</Navbar>

				<LabelPathBar />

				<Content />

			</section>
			<Footer />
		</div>
	);
}

export default App;
