import { SET_COLLECTIONS_FROM_API } from "../constants";

const initState = {
    redux: 'holi', // eliminar
    productos: {}
}

const collectionReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_COLLECTIONS_FROM_API:
            return {
                ...state,
                productos: action.payload
            }
        default:
            return state
    }
}

export default collectionReducer