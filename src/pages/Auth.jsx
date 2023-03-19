import React from 'react';
import Footer from './../components/footer/Footer';
import Navbar from './../components/navbar/Navbar';
import Login from '../components/authorisation/Authorisation';

const Intro = () => {
	let isAuth = false

	return (
		<div className="app">
			{/* <Sidebar isAuth={isAuth} /> */}
			<section className="content">

				<Login />
			</section>
			<Footer />
		</div>
	);
};

export default Intro;