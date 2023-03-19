import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { auth } from './../actions/user';
import Footer from '../components/footer/Footer.jsx';
import Navbar from '../components/navbar/Navbar.jsx';
import Content from '../components/content/Content.jsx';
import LabelPathBar from '../components/labelCurrentFolderState/LabelCurrentFolderState.jsx';
import Input from '../utils/input/Input.jsx';
// import Sidebar from '../components/sidebar/Sidebar.jsx';

import './../components/index.scss'



const Application = () => {

	const isAuth = useSelector(state => state.user.isAuth)
	const dispatch = useDispatch()

	useEffect(() => { dispatch(auth()) }, [])


	return (
		<div className="">
			<div className="app">
				{/* <Sidebar isAuth={isAuth} /> */}

				<section className="content">
					<Navbar>
						<Input />
					</Navbar>

					<LabelPathBar />

					<Content />


				</section>
				<Footer />
			</div>
		</div>
	);
};

export default Application;