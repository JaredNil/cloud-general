import React from 'react';
import Sidebar from './../components/sidebar/Sidebar';
import Footer from './../components/footer/Footer';
import Navbar from './../components/navbar/Navbar';
import Registration from './../components/authorization/Registration';

const Intro = () => {
	let isAuth = false

	return (
		<div className="app">
			<Sidebar isAuth={isAuth} />
			<section className="content">
				<Navbar />
				hi, this app
				<Registration></Registration>
			</section>
			<Footer />
		</div>
	);
};

export default Intro;