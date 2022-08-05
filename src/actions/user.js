import axios from 'axios';
import { setUser } from '../reducers/userReducer'
import { store } from './../reducers/index';
import { API_URL } from '../config.js';




export const registration = async (email, password) => {
	try {
		const responce = await axios.post('${API_URL}api/auth/registration',
			{
				email,
				password
			})
		alert(responce.data.message)
	} catch (error) {
		console.log(error, 'Ошибка на стадии передачи данных регистрации на сервер');
	}
}



export const login = (email, password) => {
	return async () => {
		try {
			const responce = await axios.post(
				`${API_URL}api/auth/login`,
				{
					email,
					password
				})
			store.dispatch(setUser(responce.data.user))
			localStorage.setItem('token', responce.data.token)

			console.log(responce.data);
		} catch (error) {
			console.log(error);
		}
	}
}


export const auth = () => {
	return async () => {
		try {
			const responce = await axios.get(
				`${API_URL}api/auth/auth`,
				{ headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
			)
			store.dispatch(setUser(responce.data.user))
			localStorage.setItem('token', responce.data.token)


			console.log(responce.data);
		} catch (error) {
			console.log(error);
			localStorage.removeItem('token')
		}
	}
}

export const uploadAvatar = (file) => {
	return async dispatch => {
		try {
			const formData = new FormData()
			formData.append('file', file)

			const responce = await axios.post(
				`${API_URL}api/files/avatar`,
				formData,
				{ headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
			)
			dispatch(setUser(responce.data))

		} catch (error) {
			console.log(error);

		}
	}
}

export const deleteAvatar = () => {
	return async dispatch => {
		try {

			const responce = await axios.delete(
				`${API_URL}api/files/avatar`,
				{ headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
			)
			dispatch(setUser(responce.data))

		} catch (error) {
			console.log(error);

		}
	}
}