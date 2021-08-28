import { BASE_URL, SET_COLLECTIONS_FROM_API } from "../constants";


export const fetchCollections = () => async (dispatch) => {
    try {
        const data = await fetch(`${BASE_URL}store/collections/`)
        const collections = await data.json()
        dispatch({ type: SET_COLLECTIONS_FROM_API, payload: collections.data })
    } catch (error) {
        console.error(error);
    }
}