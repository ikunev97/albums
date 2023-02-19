import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setItems: (state, action: PayloadAction<IPhoto[]>) => {
      const groupBy = "albumId";

      const groupedAlbums = action.payload.reduce(
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
    setError: (state, action: PayloadAction<string>) => {
      state.hasError = action.payload;
    },
  },
});

export const { setLoading, setItems, setError } = albumsSlice.actions;

export default albumsSlice.reducer;
