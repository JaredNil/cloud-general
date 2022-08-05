import React from 'react';
import './file.scss'
import dirLogo from '../../../../assets/img/dir.svg'
import fileLogo from '../../../../assets/img/file.svg'
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
			<div
				className="file"
				key={file._id}
				onClick={() => openHandler(file)}>

				<img src={file.type === 'dir' ? dirLogo : fileLogo} alt="" className="file__img" />
				<div className="file__name">{file.name}</div>
				<div className="file__date">{file.date.slice(0, 10)}</div>
				<div className="file__size">{sizeFormat(file.size)}</div>
				{file.type !== 'dir' &&
					<button onClick={downloadClickHandler} className="file__btn file__download">download</button>}
				<button onClick={(e) => deleteClickHandler(e)} className="file__btn file__delete">delete</button>
			</div >)
	}
	if (fileView === 'plate') {
		return (
			<div className='file-plate' onClick={() => openHandler(file)}>
				<img src={file.type === 'dir' ? dirLogo : fileLogo} alt="" className="file-plate__img" />
				<div className="file-plate__name">{file.name}</div>
				<div className="file-plate__btns">
					{file.type !== 'dir' &&
						<button onClick={(e) => downloadClickHandler(e)} className="file-plate__btn file-plate__download">download</button>}
					<button onClick={(e) => deleteClickHandler(e)} className="file-plate__btn file-plate__delete">delete</button>
				</div>
			</div>
		);
	}
};

export default File;
