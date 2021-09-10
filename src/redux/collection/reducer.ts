import { createSlice, createAction } from "@reduxjs/toolkit";

const initialState = {
  collection: {
    data: [],
  },
};

const collectionSlice = createSlice({
  name: "collections",
  initialState,
  reducers: {
    setCollection(state, action) {
      state.collection.data = action.payload
    },
  },
});

export const loadCollection = createAction("collections/loadCollection");
export default collectionSlice.reducer;
export const { setCollection } = collectionSlice.actions;
