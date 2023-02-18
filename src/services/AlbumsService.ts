import axios from "axios";
import { ALBUMS_URL } from "../constants";
import { setError, setItems, setLoading } from "../redux/slices/AlbumsSlice";
import { AppThunk } from "../redux/store";

export const getAlbums = (): AppThunk => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await axios.get(ALBUMS_URL);
    if (response) {
      dispatch(setLoading(false));
      dispatch(setItems(response.data));
    }
  } catch (error) {
    dispatch(setError(error));
  }
};
