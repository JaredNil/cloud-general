import './authorisation.scss'

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Input from '../input/Input';

import { login } from '../../actions/user';
import { registration } from '../../actions/user';

const Authorisation = () => {
	const [email, setEmail] = useState("")
	const [pass, setPass] = useState("")

	const dispatch = useDispatch()

	return (
		<div className='authorisation'>
			<div className="authorisation__leftbar">
				<div className="authorisation__title">АВТОРИЗАЦИЯ</div>
				<div className="authorisation__block">
					<span>EMAIL ADDRESS</span>
					<Input value={email} setValue={setEmail} type="text" placeholder="TYPING YOUR EMAIL" />
					<div className="authorisation__block-status _status-email _init">
						<div className="status__container">
							{/* <span className='status'>Такая почта уже занята.</span>
							<span className='status'>Uncorrent formatter</span> */}
						</div>
					</div>
				</div>

				<div className="authorisation__block">
					<span>PASSWORD</span>
					<Input value={pass} setValue={setPass} type="password" placeholder="TYPING PASSWORD" />
					<div className="authorisation__block-status _status-pass _init ">
						<div className="status__container">
							{/* <span className='status'>Uncorrent formatter</span> */}
						</div>
					</div>
				</div>

				<div className="authorisation__block">
					<span>WORK SLEEP REPEAT PASSWORD</span>
					<Input value={pass} setValue={setPass} type="password" placeholder="REPEAT PASSWORD" />
					<div className="authorisation__block-status _status-pass _init">
						<div className="status__container">
							{/* <span className='status'>Пароли не совпадают.</span> */}
						</div></div>
				</div>
				<button
					className='authorisation__btn'
					onClick={() => { dispatch(login(email, pass)) }}
				>
					Войти
				</button>
			</div>

			<div className="authorisation__rightbar">
				<div className="authorisation__title">ВАС НЕТ В СИСТЕМЕ?</div>
				<div className="authorisation__information">
					В таком случае введите ваши данные в поле авторизации
				</div>
				<div className="authorisation__information">
					Система проверит возможна ли регистрация и создаст для Вас приватный аккаунт.
				</div>
				<button
					className='authorisation__btn'
					onClick={() => { dispatch(login(email, pass)) }}
				>
					CHECK EMAIL
				</button>
			</div>
		</div>
	)
}

export default Authorisation

{/* <div className='authorization'>
			<div className="authorization__header">Регистрация</div>
			<Input value={email} setValue={setEmail} type="text" placeholder="Введите email" />
			<Input value={pass} setValue={setPass} type="password" placeholder="Введите пароль" />
			<button className='authorization__btn'
				onClick={() => registration(email, pass)}>
				Зарегистрироваться</button>
		</div> */}