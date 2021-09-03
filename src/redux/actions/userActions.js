import axios from 'axios'

import { USER_LOGOUT, USER_LOGGIN, BASE_URL } from "../constants"

const authApi = `${BASE_URL}auth/`
const loginApi = `${BASE_URL}auth/login/`

export const register = formData => async dispatch => {
    try {
        const register = await axios.post(authApi, formData)
        const res = await register

        const token = res.data.data.token

        const { email } = formData
        dispatch({ type: USER_LOGGIN, email, jwt: token })
    } catch (error) {
        console.error(`User already created: ${error}`)
    }
}

export const validateSession = token => async dispatch => {
    try {
        const validate = await fetch(authApi, {
            method: 'get',
            headers: {
                'x-auth-token': token
            }
        })
        const res = await validate.json()
        const { success, data } = res
        if (success) {
            dispatch({ type: USER_LOGGIN, email: data.email, jwt: token })
        } else {
            localStorage.removeItem('token')
            dispatch(logout())
        }
    } catch (error) {
        console.error(error)
    }
}

export const login = (formData) => async dispatch => {
    try {
        const login = await axios.post(loginApi, formData)
        const res = await login

        const token = res.data.data.token
        const { email } = formData
        localStorage.setItem('token', token)
        dispatch({ type: USER_LOGGIN, email, jwt: token })
    } catch (error) {
        console.error(`Invalid credentials: ${error}`)
    }
}

export const logout = () => {
    localStorage.removeItem('token')
    return { type: USER_LOGOUT }
}