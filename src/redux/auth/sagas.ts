import { call, put, spawn, takeLatest } from "redux-saga/effects";
import { toast } from "react-toastify";
import { login, register, setToken, setUser, signOut } from "./reducer";
import { PayloadAction } from "@reduxjs/toolkit";
import fetchAuth from "../../api/auth";

function* displayError(message:string) {
  yield call(toast.error, message);
}

function* onLogin(action: PayloadAction<{ displayName:string,email: string; password: string }>): any {
  const result = yield call(fetchAuth.login, action.payload);
  const { success, data, message } = result;
  if (success) {
    console.log(data.token)
    yield put(setToken(data.token));
    yield put(setUser(true));
    yield window.localStorage.setItem("token", data.token);
  } else {
    yield call(displayError, message);
  }
}
function* onRegister(action: PayloadAction<{ email: string; password: string }>): any {
  const result = yield call(fetchAuth.register, action.payload);
  const { success, data, message } = result;
  if (success) {
    yield put(setToken(data.token));
    yield put(setUser(true));
    yield window.localStorage.setItem("token", data.token);
  } else {
    yield call(displayError, message);
  }
}

function* onSignOut() {
  yield window.localStorage.removeItem("token");
}

function* listenActions() {
  yield takeLatest(login, onLogin);
  yield takeLatest(register, onRegister);
  yield takeLatest(signOut, onSignOut);
}

function* initSaga() {
  yield spawn(listenActions);
}

export default initSaga;
