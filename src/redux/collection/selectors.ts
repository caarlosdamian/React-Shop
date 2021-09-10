import { createSelector } from "@reduxjs/toolkit";

export const getCollection = createSelector(
  (state) => {
      return state.collection.data
  }
);
