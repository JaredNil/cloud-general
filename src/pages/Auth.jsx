import React from 'react';
import Footer from '../components/footer/Footer.jsx';
import Navbar from '../components/navbar/Navbar.jsx';
import Login from '../components/authorisation/Authorisation.jsx';

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