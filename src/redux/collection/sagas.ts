import { call, put, spawn, takeLatest } from "redux-saga/effects";
import { toast } from "react-toastify";
import { loadCollection, setCollection } from "./reducer";

import fetchCollection from "../../api/collection";

function* displayError(message:string) {
  yield call(toast.error, message);
}

function* onLoadCollection(): any {
  const result = yield call(fetchCollection.getAll);
  const { success, data, message } = result;
  if (success) {
    yield put(setCollection(data));
  } else {
    yield call(displayError, message);
  }
}

function* listenActions() {
  yield takeLatest(loadCollection, onLoadCollection);
}

function* initSaga() {
  yield spawn(listenActions);
}

export default initSaga;
