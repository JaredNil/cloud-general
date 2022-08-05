import './authorization.scss'

import Input from '../input/Input';
import { useState } from 'react';
import { registration } from '../../actions/user';

const Registration = () => {
	const [email, setEmail] = useState("")
	const [pass, setPass] = useState("")

	return (
		<div className='authorization'>
			<div className="authorization__header">Регистрация</div>
			<Input value={email} setValue={setEmail} type="text" placeholder="Введите email" />
			<Input value={pass} setValue={setPass} type="password" placeholder="Введите пароль" />
			<button className='authorization__btn' onClick={() => registration(email, pass)}>Зарегистрироваться</button>
		</div>
	)
}

export default Registration