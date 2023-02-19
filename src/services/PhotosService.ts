import axios from "axios";
import { ALBUMS_URL } from "../constants";
import { setError, setItems, setLoading } from "../redux/slices/PhotosSlice";
import { AppThunk } from "../redux/store";

export const getPhotos =
  (albumId: string): AppThunk =>
  async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await axios.get(`${ALBUMS_URL}?albumId=${albumId}`);
      if (response) {
        dispatch(setLoading(false));
        dispatch(setItems(response.data));
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        dispatch(setError(error.message));
      }
    }
  };
