import './authorization.scss'

import Input from '../input/Input';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../actions/user';


const Login = () => {
	const [email, setEmail] = useState("")
	const [pass, setPass] = useState("")

	const dispatch = useDispatch()

	return (
		<div className='authorization'>
			<div className="authorization__header">Авторизация</div>
			<Input value={email} setValue={setEmail} type="text" placeholder="Введите email" />
			<Input value={pass} setValue={setPass} type="password" placeholder="Введите пароль" />
			<button className='authorization__btn' onClick={() => dispatch(login(email, pass))}>Войти</button>
		</div>
	)
}

export default Login