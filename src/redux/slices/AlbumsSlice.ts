import { createSlice } from "@reduxjs/toolkit";
import { IPhoto } from "../../types";

export type ResultType = {
  [type: number]: IPhoto[];
};

export type AlbumsState = {
  albums: ResultType;
  isLoading: boolean;
  hasError: string;
};

const initialState: AlbumsState = {
  albums: [],
  isLoading: false,
  hasError: "",
};

const albumsSlice = createSlice({
  name: "albums",
  initialState,
  reducers: {
    setLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
    setItems: (state, { payload }) => {
      const groupBy = "albumId";

      const groupedAlbums = payload.reduce(
        (result: ResultType, photo: IPhoto) => {
          (result[photo[groupBy]] = result[photo[groupBy]] || []).push(photo);
          return result;
        },
        {}
      );

      state.isLoading = false;
      state.hasError = "";
      state.albums = groupedAlbums;
    },
    setError: (state, { payload }) => {
      state.hasError = payload;
    },
  },
});

export const { setLoading, setItems, setError } = albumsSlice.actions;

export default albumsSlice.reducer;
