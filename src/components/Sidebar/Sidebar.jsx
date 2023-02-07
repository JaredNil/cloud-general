import React from 'react';
import './sidebar.scss'
import { Link } from 'react-router-dom';

const Sidebar = () => {
	return (
		<section className='sidebar'>
			<Link to={'/'} className={'sidebar__logo'}>
				CloudJN<span>.</span>
			</Link>
			<a href='/' className='sidebar__create sidebar__button'>
				<span className='sidebar__button-icon'>+</span>Create folder
			</a>
			<a href='/' className='sidebar__main sidebar__button'>
				<svg className='sidebar__button-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512"><g id="_01_align_center" data-name="01 align center"><path d="M24,19V4a3,3,0,0,0-3-3H3A3,3,0,0,0,0,4V19H11v2H6v2H18V21H13V19ZM3,3H21a1,1,0,0,1,1,1v9H2V4A1,1,0,0,1,3,3ZM2,15H22v2H2Z" /></g></svg>My cloud
			</a>
			<a href='/' className='sidebar__sth sidebar__button'>
				<span className='sidebar__button-icon'>#</span>Sth link
			</a>
			<a href='/' className='sidebar__sth sidebar__button'>
				<span className='sidebar__button-icon'>#</span>Sth link
			</a>
			<a href='/' className='sidebar__sth sidebar__button'>
				<span className='sidebar__button-icon'>#</span>Sth link
			</a>

			<div className="sidebar__progress">
				<div className="sidebar__progress-title">Storage using</div>
				<div className="sidebar__progress-line"></div>
				<div className="sidebar__progress-used">4,2 GB of 32 GB</div>
			</div>

			<a href='/' className='sidebar__feedback sidebar__button'>
				<span className='sidebar__button-icon'>?</span>Feedback
			</a>
		</section>

	);
};

export default Sidebar;