import React from 'react';
// import Sidebar from './../components/sidebar/Sidebar.jsx';
import Footer from './../components/footer/Footer.jsx';

const Feedback = () => {

	const isHide = false

	return (
		<div className="app">
			{/* <Sidebar isAuth={isHide} /> */}
			<section
				className="content"
				style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh', fontSize: '30px' }}
			>
				<span style={{ userSelect: 'none' }}>
					Для обратной связи:
				</span>
				<br style={{ userSelect: 'none' }} />
				<span>jared.bozh@gmail.com</span>
			</section>
			<Footer />
		</div>
	);
};

export default Feedback;