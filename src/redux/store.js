import ReduxThunk from 'redux-thunk'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import 'regenerator-runtime/runtime'

import rootReducer from './reducers/rootReducer'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ReduxThunk)))

export default store