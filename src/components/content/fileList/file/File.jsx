import React, { useState } from 'react';
import './file.scss'
import dirLogo from '../../../../assets/img/dir.svg'
import fileLogo from '../../../../assets/img/file.svg'
import threeDots from '../../../../assets/img/threeDots.svg'
import { useDispatch } from 'react-redux';
import { setCurrentDir, pushToStack } from './../../../../reducers/fileReducer';
import { useSelector } from 'react-redux';
import { downloadFile } from '../../../../actions/file'
import { deleteFile } from './../../../../actions/file';
import sizeFormat from '../../../../utils/sizeFormat'

const File = ({ file }) => {
	const dispatch = useDispatch();
	const currentDir = useSelector(state => state.files.currentDir)
	let fileView = useSelector(state => state.files.view)



	function openHandler() {
		if (file.type === 'dir') {
			dispatch(pushToStack(currentDir))
			dispatch(setCurrentDir(file._id))
		}
	}

	function downloadClickHandler(event) {
		event.stopPropagation()
		downloadFile(file)
	}

	function deleteClickHandler(event) {
		event.stopPropagation()
		dispatch(deleteFile(file))
	}




	if (fileView == 'list') {

		return (
			<div className="tb__line" key={file._id}
				onClick={() => openHandler(file)}
			>
				<img className="logo" src={file.type === 'dir' ? dirLogo : fileLogo} alt="" />
				<div className="name">{file.name}</div>
				<div className="date">{file.date.slice(0, 10)}</div>
				<div className="size">{sizeFormat(file.size)}</div>
				<div className="tool">
					<div className="tool_image">
						<img src={threeDots} alt="" />
					</div>
					<div className="tool_menu">
						{file.type !== 'dir' &&
							<div onClick={downloadClickHandler} className="download">download</div>
						}
						<div onClick={(e) => deleteClickHandler(e)} className="delete">delete</div>
					</div>
				</div>
			</div >)
	}
	if (fileView === 'plate') {
		return (
			<div className='file-plate' onClick={() => openHandler(file)}>
				<img src={file.type === 'dir' ? dirLogo : fileLogo} alt="" className="file-plate__img" />
				<div className="file-plate__name">{file.name}</div>
				<div className="file-plate__btns">
					{file.type !== 'dir' &&
						<button onClick={(e) => downloadClickHandler(e)} className="download">download</button>
					}
					<button onClick={(e) => deleteClickHandler(e)} className="delete">delete</button>
				</div>
			</div>
		);
	}
};

export default File;
