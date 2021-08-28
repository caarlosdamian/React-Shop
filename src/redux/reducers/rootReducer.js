import { combineReducers } from 'redux'
import collectionReducer from './collectionReducer';

const rootReducer = combineReducers({
    collections: collectionReducer
})

export default rootReducer