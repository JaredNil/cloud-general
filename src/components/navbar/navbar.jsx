import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import setting from '../../assets/img/setting.svg'
import find from '../../assets/img/find.png'
import './navbar.scss';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../reducers/userReducer';
import { searchFiles, getFiles } from '../../actions/file';
import avatarDefault from '../../assets/img/avatar.svg'
import { showLoader } from '../../reducers/appReducer';
import { API_URL } from '../../config';

const Navbar = (props) => {
	const isAuth = useSelector(state => state.user.isAuth)

	const dispatch = useDispatch()
	const hello = useSelector(state => state.user.currentUser.email)
	const currentDir = useSelector(state => state.files.currentDir)
	const currentUser = useSelector(state => state.user.currentUser)

	const [searchName, setSearchName] = useState('')
	const [searchTimeout, setSearchTimeout] = useState(false)

	const avatar = currentUser.avatar
		? `${API_URL + currentUser.avatar}`
		: avatarDefault


	function searchChangeHandler(e) {
		setSearchName(e.target.value)
		if (searchTimeout !== false) {
			clearTimeout(searchTimeout)
		}
		dispatch(showLoader())
		if (e.target.value !== '') {
			setSearchTimeout(setTimeout((value) => {
				dispatch(searchFiles(value));
			}, 500, e.target.value))
		} else {
			dispatch(getFiles(currentDir))
		}
	}

	return (
		<div className="navbar">
			<div className="navbar__container">

				<div className="navbar__introduce">
					<div>Hi,</div>
					<span> {(hello) ? hello : 'User'} </span>
				</div>
				<div className="navbar__tools">
					{isAuth &&
						<div className="navbar__find">
							<input
								value={searchName}
								onChange={e => searchChangeHandler(e)}
								type="text"
								placeholder='Поиск, что умнее тебя'
							/>
							<img src={find} alt="" />
						</div>
					}
					{!isAuth && <div className="navbar__login"><Link to="/auth">Войти</Link></div>}
					{!isAuth && <div className="navbar__registration"><Link to="/reg">Регистрация</Link></div>}

					{isAuth &&
						<NavLink to={'/profile'}>
							<img className='navbar__avatar' src={avatar} alt="" />
						</NavLink>
					}
					<div className="navbar__setting">
						<img src={setting} alt="" />
					</div>
					{isAuth && <div className="navbar__login" onClick={() => dispatch(logout())}><Link to="/">Выйти</Link></div>}
				</div>
			</div >
		</div>
	)
}

export default Navbar