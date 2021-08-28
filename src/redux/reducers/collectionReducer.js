import { SET_COLLECTIONS_FROM_API } from "../constants";

const initState = {
    products: []
}

const collectionReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_COLLECTIONS_FROM_API:
            return {
                ...state,
                products: action.payload
            }
        default:
            return state
    }
}

export default collectionReducer