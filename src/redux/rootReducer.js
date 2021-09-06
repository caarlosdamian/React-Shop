import { combineReducers } from "@reduxjs/toolkit";

import collectionReducer from "./collection/reducer";

const createRootReducer = () =>
  combineReducers({
    collection: collectionReducer,
  });

export default createRootReducer;
