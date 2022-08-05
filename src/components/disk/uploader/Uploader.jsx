import React from 'react';
import './uploader.scss'
import UploadFile from './UploadFile';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { hideUploader } from './../../../reducers/uploadReducer';


const Uploader = () => {
	// const files = [{ id: 1, name: 'file', progress: 0 }, { id: 2, name: 'file', progress: 90 }] ||
	const files = useSelector(state => state.upload.files) || null
	const isVisible = useSelector(state => state.upload.isVisible)
	const dispatch = useDispatch()


	return (isVisible &&
		<div className='uploader'>
			<div className="uploader__header">
				<div className="uploader__title">Загрузки</div>
				<button className="uploader__close" onClick={() => dispatch(hideUploader())}>x</button>
			</div>
			{
				files.map(file => {
					return <UploadFile key={file.id} file={file} ></UploadFile>
				})
			}
		</div >
	);
};

export default Uploader;