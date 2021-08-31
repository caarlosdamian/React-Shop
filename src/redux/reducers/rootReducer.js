import { combineReducers } from 'redux'
import cartReducer from './cartReducer';
import collectionReducer from './collectionReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    collections: collectionReducer,
    cart: cartReducer,
    user: userReducer
})

export default rootReducer