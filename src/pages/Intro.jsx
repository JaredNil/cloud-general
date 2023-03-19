import React from 'react';
import { Link } from 'react-router-dom';

// import Sidebar from './../components/sidebar/Sidebar.jsx';
import Footer from './../components/footer/Footer.jsx';
import Navbar from './../components/navbar/Navbar.jsx';

import './scss/intro.scss'
import { useSelector } from 'react-redux';


const Intro = () => {
	const isAuth = useSelector(state => state.user.isAuth)

	return (
		<div className="app">
			{/* <Sidebar isAuth={isAuth} /> */}
			<section className="content">
				<Navbar />
				<div className="introduceText">
					Здравствуйте! Добро пожаловать в облачное хранилище файлов <b>CloudN<span style={{ color: 'red' }}>.</span> </b><br />
					Мы предоставляем бесплатный доступ к Вашим файлам для хранения, просмотра и обмена в любом месте. Начните открывать новые возможности и сохранять свои данные без каких-либо проблем.
					<br /><span style={{ color: '#698' }}>@ChatGPT</span>
				</div>
				<div className="introduceEntity">
					Войдите на свой аккаунт или пройдите быструю регистрацию.
				</div>
				<div className="introduceButtons">
					<Link className="btn-auth" to={'/auth'}>
						<span>Вход</span>
					</Link>
				</div>
			</section>
			<Footer />
		</div>
	);
};

export default Intro;