import { createSlice } from "@reduxjs/toolkit";
import { IPhoto } from "../../types";

export type AlbumsState = {
  photos: IPhoto[];
  isLoading: boolean;
  hasError: string;
  favourites: IPhoto[];
};

const initialState: AlbumsState = {
  photos: [],
  isLoading: false,
  hasError: "",
  favourites: [],
};

const photosSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {
    setLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
    setItems: (state, { payload }) => {
      state.isLoading = false;
      state.hasError = "";
      state.photos = payload;
    },
    addToFavourites: (state, { payload }) => {
      state.favourites.push(payload);
    },
    removeFromFavourites: (state, { payload }) => {
      state.favourites = state.favourites.filter(
        (item) => item.id !== payload.id
      );
    },
    setError: (state, { payload }) => {
      state.hasError = payload;
    },
  },
});

export const {
  setLoading,
  setItems,
  setError,
  addToFavourites,
  removeFromFavourites,
} = photosSlice.actions;

export default photosSlice.reducer;
