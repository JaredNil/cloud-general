import React from 'react';
import './content.scss'

import line from './../../assets/img/line.svg'
import block from './../../assets/img/block.svg'

const Content = () => {
	return (
		<div className='contentTable'>
			<div className="contentTable__label">
				<div className="contentTable__title">
					Storage
				</div>
				<div className="contentTable__sort">
					<img src={line} className={'active'} alt="" />
					<img src={block} alt="" />
				</div>
			</div>

			<div className="contentTable__table tb">
				<div className="tb__container">
					<div className="tb__line tb__line-title">
						<div className="name">Name</div>
						<div className="date">Sth Date</div>
						<div className="size">Size</div>
						<div className="tool"></div>
					</div>
					<div className="tb__line">
						<div className="name">docs</div>
						<div className="date">01.01.2000</div>
						<div className="size">1Gb</div>
						<div className="tool">...</div>
					</div>
					<div className="tb__line">
						<div className="name">docs</div>
						<div className="date">01.01.2000</div>
						<div className="size">1Gb</div>
						<div className="tool">...</div>
					</div>
					<div className="tb__line">
						<div className="name">docs</div>
						<div className="date">01.01.2000</div>
						<div className="size">1Gb</div>
						<div className="tool">...</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Content;