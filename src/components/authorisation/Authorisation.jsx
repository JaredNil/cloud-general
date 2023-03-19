
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Input from '../input/Input';

import { login } from '../../actions/user';
import { registration } from '../../actions/user';

import './authorisation.scss'

const Authorisation = () => {
	const dispatch = useDispatch()

	const [reg, setReg] = useState(false)

	const [email, setEmail] = useState("")
	const [pass, setPass] = useState("")

	const [emailError, setEmailError] = useState([])
	const [passError, setPassError] = useState([])


	const handleValidateEmail = (e) => {
		setEmail(e.target.value)

		if (!e.target.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
			// let temp = emailError
			// 	.filter(error => error == 'Ошибка формата введенной почты')
			// 	.push('Ошибка формата введенной почты')
			// setEmailError[temp]

			let temp = [...emailError]
				.filter(error => error == 'Ошибка формата введенной почты')
				.push('Ошибка формата введенной почты')

			console.log(temp)

			// (emailError.includes('Ошибка формата введенной почты'))
			// 	? setEmailError([...emailError])
			// 	: setEmailError([...emailError, 'Ошибка формата введенной почты'])
		} else {
			setEmailError([])
		}
	}


	const handleValidatePass = (e) => {
		setPass(e.target.value)

		if ((Number(e.target.value.split('').length) < 2)) {
			(passError.includes('Введите больше 3 символов'))
				? setPassError([...passError])
				: setPassError([...passError, 'Введите больше 3 символов'])
		} else {
			setPassError([])
		}
	}

	const ratioNode = document.getElementsByClassName('circle')[0]
	const accountHandler = (e) => {
		if (ratioNode.classList.contains('_active')) { setReg(false) }
		else { setReg(true) }
		ratioNode.classList.toggle('_active')

	}


	return (
		<div className='authorisation'>
			<div className="authorisation__leftbar">
				<div className="authorisation__title">
					{(!reg) ? 'АВТОРИЗАЦИЯ' : 'РЕГИСТРАЦИЯ'}
				</div>
				<div className="authorisation__block">
					<span>EMAIL ADDRESS</span>
					<input
						onChange={handleValidateEmail}
						value={email}
						type="text"
						placeholder={"TYPING YOUR EMAIL"}
					/>

					<div
						className={'authorisation__block-status _status-email '
							.concat((emailError.length != 0)
								? '_deny'
								: ((email.split('').length == 0) ? '_init' : '_access')
							)}
					>
						<div className="status__container">
							{
								(emailError.length == 0 && email > 5)
									? <span className='status'>Всё правильно</span>
									: emailError.map((error, i) => {
										return <span className='status' key={i}> {error} </span>
									})
							}
						</div>
					</div>
				</div>

				<div className="authorisation__block">
					<span>PASSWORD</span>
					<input
						onChange={handleValidatePass}
						value={pass}
						type="password"
						placeholder={"TYPING PASSWORD"}
					/>
					<div
						className={'authorisation__block-status _status-pass '
							.concat((passError.length != 0)
								? '_deny'
								: ((pass.split('').length == 0) ? '_init' : '_access')
							)}
					>
						<div className="status__container">
							{
								(passError.length == 0 && pass > 5)
									? <span className='status'>Всё правильно</span>
									: passError.map((error, i) => {
										return <span className='status' key={i}> {error} </span>
									})
							}
						</div>
					</div>
				</div>

				{reg && <div className="authorisation__block">
					<span>WORK SLEEP REPEAT PASSWORD</span>
					<Input value={pass} setValue={setPass} type="password" placeholder="REPEAT PASSWORD" />
					<div className="authorisation__block-status _status-pass _init">
						<div className="status__container">	</div>
					</div>
				</div>}
				<button
					disabled={(emailError.length == 0 && passError.length == 0) ? false : true}
					className='authorisation__btn'
					onClick={() => { (!reg) ? dispatch(login(email, pass)) : dispatch(registration(email, pass)) }}
				>
					ENTER
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
				<div className="authorisation__ratio" onClick={accountHandler}>
					<div className='authorisation__ratio-button'>
						<span className='swither'>
							<span className='circle '></span>
						</span>
					</div>
					<div className="authorisation__ratio-text">
						<span>NEW ACCOUNT</span>
					</div>
				</div>

			</div>
		</div >
	)
}

export default Authorisation