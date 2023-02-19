import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Loading } from "../../common/Loading";
import {
  selectPhotos,
  selectFavourites,
  selectIsLoading,
} from "../../redux/selectors/PhotosSelector";
import { selectAlbums } from "../../redux/selectors/AlbumsSelector";
import { AppDispatch } from "../../redux/store";
import Photo from "../../common/Photo";
import { IPhoto } from "../../types";
import { PhotoActions } from "./components/PhotoActions";
import {
  addToFavourites,
  removeFromFavourites,
} from "../../redux/slices/PhotosSlice";
import { Wrapper } from "./styles/PhotoStyle";
import { getPhotos } from "../../services/PhotosService";

export const PhotosContainer = () => {
  const { albumId } = useParams();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (!albumId) return;
    dispatch(getPhotos(albumId));
  }, [dispatch, albumId]);

  const albums = useSelector(selectAlbums);
  const photos = useSelector(selectPhotos);
  const isLoading = useSelector(selectIsLoading);
  const favourites = useSelector(selectFavourites);
  const albumsLength = Object.keys(albums).length;
  const id = Number(albumId);

  if (isLoading) return <Loading />;
  return (
    <>
      <PhotoActions albumId={id} albumsLength={albumsLength} />
      <Wrapper>
        {photos.map((item: IPhoto) => {
          const isFavouriteItem = favourites.some(
            (favourite) => favourite.id === item.id
          );
          return (
            <Photo
              key={item.id}
              isFavouriteItem={isFavouriteItem}
              photoItem={item}
              addToFavourites={() => dispatch(addToFavourites(item))}
              removeFromFavourites={() => dispatch(removeFromFavourites(item))}
            />
          );
        })}
      </Wrapper>
    </>
  );
};
