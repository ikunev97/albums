import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPhoto } from "../../types";

export type PhotosState = {
  photos: IPhoto[];
  isLoading: boolean;
  hasError: string;
  favourites: IPhoto[];
};

const initialState: PhotosState = {
  photos: [],
  isLoading: false,
  hasError: "",
  favourites: [],
};

const photosSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setItems: (state, action: PayloadAction<IPhoto[]>) => {
      state.isLoading = false;
      state.hasError = "";
      state.photos = action.payload;
    },
    addToFavourites: (state, action: PayloadAction<IPhoto>) => {
      state.favourites.push(action.payload);
    },
    removeFromFavourites: (state, action: PayloadAction<IPhoto>) => {
      state.favourites = state.favourites.filter(
        (item) => item.id !== action.payload.id
      );
    },
    setError: (state, action: PayloadAction<string>) => {
      state.hasError = action.payload;
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
