import React, { Children } from 'react';
import begin from './../../assets/img/begin.svg'
import arrow from './../../assets/img/arrow.svg'
import './labelCurrentFolderState.scss'

const LabelPathBar = () => {
	return (
		<div className='navbar__path'>
			<div className="navbar__path-container">
				<div className='mainFolder'>
					<img src={begin} alt="" />
					<div className='folder'>UserMainFolder</div>
				</div>
				<img src={arrow} alt="" />
				<span className='folder'>SthFolder</span>
				<img src={arrow} alt="" />
				<span className='folder'>SthFolder</span>
			</div>
		</div>
	);
};

export default LabelPathBar;