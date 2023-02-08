
import { useSelector } from 'react-redux';
import React from 'react'

import '../fileList/file/file.scss'
import './fileList.scss'

import File from './file/File';

import { setCurrentDir } from '../../../reducers/fileReducer';
import backFolder from './../../../assets/img/backFolder.svg'
import { useDispatch } from 'react-redux';



const FileList = () => {
	const dispatch = useDispatch()
	const dirStack = useSelector(state => state.files.dirStack)
	let files = useSelector(state => state.files.files)
	let fileView = useSelector(state => state.files.view)

	function backClickHandler() {
		const backDirId = dirStack.pop()
		dispatch(setCurrentDir(backDirId))
	}


	if (files.length === 0) {
		return (
			<div className="contentTable__table tb">
				<div className="tb__container">
					<div className="tb__line tb__line-title">
						<img className="logo logo-back" src={backFolder} alt="#" onClick={() => backClickHandler()} />
						<div className="name">Name</div>
						<div className="date">Sth Date</div>
						<div className="size">Size</div>
						<div className="tool"></div>
					</div>
					<div className="content__table-empty">
						<span>Empty</span>
					</div>
				</div>

			</div>
		)
	}


	if (fileView === 'list') {
		return (
			<div className="contentTable__table tb">
				<div className="tb__container">
					<div className="tb__line tb__line-title">
						<img className="logo logo-back" src={backFolder} alt="#" onClick={() => backClickHandler()} />
						<div className="name">Name</div>
						<div className="date">Sth Date</div>
						<div className="size">Size</div>
						<div className="tool"></div>
					</div>

					{files.map((file, id) => {
						return (
							<File file={file} key={id} />
						)
					})}
				</div>
			</div>
		)
	}
	if (fileView === 'plate') {
		return (
			<div className='file-plate'>
				{files.map((file, id) => {
					return (
						<File key={id} file={file} />
					)
				})}
			</div>
		)
	}
};



export default FileList;