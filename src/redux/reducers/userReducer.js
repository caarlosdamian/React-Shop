import { USER_LOGGIN, USER_LOGOUT } from "../constants";

const initState = {
    name: '',
    lastname: '',
    email: '',
    loggedIn: false,
    jwt: ''
}

const userReducer = (state = initState, action) => {

    switch (action.type) {
        case USER_LOGGIN:
            return {
                ...state,
                name: action.name,
                lastname: action.lastname,
                email: action.email,
                loggedIn: true,
                jwt: action.jwt
            }
        case USER_LOGOUT:
            return {
                ...initState
            }
        default:
            return state
    }
}

export default userReducer