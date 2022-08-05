import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFiles, uploadFile } from './../../actions/file';
import FileList from './fileList/FileList';
import './disk.scss';
import Popup from "./Popup";
import { setPopupDisplay, setCurrentDir, setFileView } from './../../reducers/fileReducer';
import Uploader from './uploader/Uploader';


const Disk = () => {
	const dispatch = useDispatch()
	const dirStack = useSelector(state => state.files.dirStack)
	const loader = useSelector(state => state.app.loader)
	const [dragEnter, setDragEnter] = useState(false)
	const [sort, setSort] = useState('type')

	const currentDir = useSelector(state => state.files.currentDir)
	useEffect(() => {
		dispatch(getFiles(currentDir, sort))
		// eslint-disable-next-line
	}, [currentDir, sort])

	function showPopupHandler() {
		dispatch(setPopupDisplay('flex'))
	}
	function backClickHandler() {
		const backDirId = dirStack.pop()
		dispatch(setCurrentDir(backDirId))
	}

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



	return (!dragEnter ?
		<div className='disk'
			onDragEnter={dragEnterHandler}
			onDragLeave={dragLeaveHandler}
			onDragOver={dragEnterHandler}>

			<div className="disk__btns">
				<button className="disk__back" onClick={() => backClickHandler()}>Назад</button>
				<button className="disk__create" onClick={() => showPopupHandler()}>Создать</button>
				<div className="disk__upload">
					<label
						className="disk__upload-label"
						htmlFor='disk__upload-input'
					>
						Загрузить файл
					</label>
					<input className="disk__upload-input" multiple={true}
						onChange={(event) => fileUploadHandler(event)}
						id='disk__upload-input' type="file" />
					<select value={sort}
						onChange={(e) => setSort(e.target.value)}
						className='disk__select'>
						<option value="name">По имени</option>
						<option value="type">По типу</option>
						<option value="date">По дате</option>
					</select>
					<button className="disk__plate" onClick={() => dispatch(setFileView('plate'))}></button>
					<button className="disk__list" onClick={() => dispatch(setFileView('list'))}></button>
				</div>
			</div>
			<FileList />
			<Popup />
			<Uploader />
		</div>
		:
		<div className="drop-area"
			onDragEnter={dragEnterHandler} onDragLeave={dragLeaveHandler} onDragOver={dragEnterHandler}
			onDrop={dropHandler}>
			Перетащите файлы сюда
		</div>
	);
};

export default Disk;