import React, { useState, useEffect } from 'react';
import './content.scss'
import { useDispatch, useSelector } from 'react-redux';
import { getFiles, uploadFile } from './../../actions/file';
import line from './../../assets/img/line.svg'
import block from './../../assets/img/block.svg'

import { setPopupDisplay, setCurrentDir, setFileView } from './../../reducers/fileReducer';
import FileList from '../disk/fileList/FileList';
import Popup from './../content/Popup';
import Uploader from './../content/uploader/Uploader';

const Content = () => {
	const dispatch = useDispatch()
	const dirStack = useSelector(state => state.files.dirStack)
	const loader = useSelector(state => state.app.loader)
	const [dragEnter, setDragEnter] = useState(false)
	const [sort, setSort] = useState('type')

	const currentDir = useSelector(state => state.files.currentDir)

	useEffect(() => {
		dispatch(getFiles(currentDir, sort))
	}, [currentDir, sort])


	function fileUploadHandler(event) {
		const files = [...event.target.files]
		files.forEach(file => dispatch(uploadFile(file, currentDir)))
	}

	function dragEnterHandler(event) {
		event.preventDefault()
		event.stopPropagation();
		setDragEnter(true)
	}

	function dragLeaveHandler(event) {
		event.preventDefault()
		event.stopPropagation();
		setDragEnter(false)
	}

	function dropHandler(event) {
		event.preventDefault()
		event.stopPropagation();
		let files = [...event.dataTransfer.files]
		files.forEach(file => dispatch(uploadFile(file, currentDir)))
		setDragEnter(false)
	}

	if (loader) {
		return (
			<div className="loader">
				<div className="lds-dual-ring"></div>
			</div>
		)
	}


	return (
		!dragEnter
			? <div className='contentTable'
				onDragEnter={dragEnterHandler}
				onDragLeave={dragLeaveHandler}
				onDragOver={dragEnterHandler}
			>

				<div className="contentTable__label">
					<div className="contentTable__title">
						Storage
					</div>
					<div className="contentTable__sort">
						<img src={line} className={'active'} alt=""
							draggable="false"
							onClick={() => dispatch(setFileView('plate'))}
							onMouseDown={(e) => e.preventDefault()}
							onDrag={(e) => e.preventDefault()}
							onDragStart={(e) => e.preventDefault()}
							onDragStartCapture={(e) => e.preventDefault()}
						/>
						<img src={block} alt="" onClick={() => dispatch(setFileView('list'))} />
					</div>
				</div>
				<FileList />
				<Popup />
				<Uploader />

			</div>
			:
			<div className="contentTable "
				onDragEnter={dragEnterHandler} onDragLeave={dragLeaveHandler} onDragOver={dragEnterHandler}
				onDrop={dropHandler}>
				<div className="contentTable-drag">
					Перетащите файлы сюда
				</div>
			</div>
	);
};

export default Content;