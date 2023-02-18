import { combineReducers } from "@reduxjs/toolkit";
import albums from "./slices/AlbumsSlice";
import photos from "./slices/PhotosSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const rootReducer = combineReducers({
  albumsReducer: albums,
  photosReducer: photos,
});

const persistConfig = {
  key: "root",
  storage,
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);

export default rootReducer;
