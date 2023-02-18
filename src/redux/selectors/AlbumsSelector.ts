import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const selectContent = (state: RootState) => state;

export const selectIsLoading = createSelector(
  selectContent,
  (content) => content.albumsReducer.isLoading
);

export const selectAlbums = createSelector(
  selectContent,
  (content) => content.albumsReducer.albums
);
