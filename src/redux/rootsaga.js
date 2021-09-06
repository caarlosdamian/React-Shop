import { spawn } from "redux-saga/effects";

import collectionSaga from "./collection/sagas";
import authSaga from "./auth/sagas"
export default function* root() {
  yield spawn(collectionSaga);
  yield spawn(authSaga);
}