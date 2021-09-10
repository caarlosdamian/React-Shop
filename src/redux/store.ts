import { configureStore } from "@reduxjs/toolkit";

import createSagaMiddleware from "redux-saga";
import authReducer from "./auth/reducer";
import collectionReducer from "./collection/reducer";
import cartReducer from "./cart/reducer";

import rootSaga from "./rootsaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  devTools: true,
  reducer: {
    collectionReducer,
    authReducer,
    cartReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
