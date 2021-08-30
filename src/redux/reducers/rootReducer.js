import { combineReducers } from 'redux'
import cartReducer from './cartReducer';
import collectionReducer from './collectionReducer';

const rootReducer = combineReducers({
    collections: collectionReducer,
    cart: cartReducer
})

export default rootReducer