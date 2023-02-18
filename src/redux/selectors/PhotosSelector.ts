import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const selectContent = (state: RootState) => state;

export const selectIsLoading = createSelector(
  selectContent,
  (content) => content.photosReducer.isLoading
);

export const selectPhotos = createSelector(
  selectContent,
  (content) => content.photosReducer.photos
);

export const selectFavourites = createSelector(
  selectContent,
  (content) => content.photosReducer.favourites
);
