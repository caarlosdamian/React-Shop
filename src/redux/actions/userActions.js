import axios from 'axios'

import { USER_LOGOUT, USER_LOGGIN, BASE_URL } from "../constants"

const registerApi = `${BASE_URL}auth/`
const loginApi = `${BASE_URL}auth/login/`

export const register = formData => async dispatch => {
    try {
        const register = await axios.post(registerApi, formData)
        const res = await register

        const token = res.data.data.token

        const { email } = formData
        dispatch({ type: USER_LOGGIN, email, jwt: token })
    } catch (error) {
        console.error(`User already created: ${error}`)
    }
}

export const login = (formData) => async dispatch => {
    try {
        const login = await axios.post(loginApi, formData)
        const res = await login

        const token = res.data.data.token
        const { email } = formData
        dispatch({ type: USER_LOGGIN, email, jwt: token })
    } catch (error) {
        console.error(`Invalid credentials: ${error}`)
    }
}

export const logout = () => ({ type: USER_LOGOUT })