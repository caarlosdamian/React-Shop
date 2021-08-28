import { put } from 'redux-saga/effects'

import { BASE_URL, SET_COLLECTIONS_FROM_API } from "../constants";


export function* fetchCollections() {
    try {
        const data = yield fetch(`${BASE_URL}store/collections/`)
        yield put({ type: SET_COLLECTIONS_FROM_API, payload: data.json() })
    } catch (error) {
        yield console.error(error)
    }
}