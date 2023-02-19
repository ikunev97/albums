import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectFavourites } from "../../redux/selectors/PhotosSelector";
import { AppDispatch } from "../../redux/store";
import Photo from "../../common/Photo";
import { IPhoto } from "../../types";
import {
  addToFavourites,
  removeFromFavourites,
} from "../../redux/slices/PhotosSlice";
import { Button, Title } from "../../common/CommonStyles";
import { FavouritesWrapper } from "./styles/FavouritesStyles";

export const FavouritesContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const favourites = useSelector(selectFavourites);

  return (
    <>
      {favourites.length > 0 ? (
        <FavouritesWrapper>
          {favourites.map((item: IPhoto) => {
            return (
              <Photo
                isFavouriteItem={true}
                photoItem={item}
                addToFavourites={() => dispatch(addToFavourites(item))}
                removeFromFavourites={() =>
                  dispatch(removeFromFavourites(item))
                }
              />
            );
          })}
        </FavouritesWrapper>
      ) : (
        <div>
          <Title>No favourite photos</Title>
          <Button
            onClick={() => navigate(`/`)}
            width="300px"
            height="40px"
            style={{ margin: "20px auto 0 auto" }}
          >
            Select album and add to favourites
          </Button>
        </div>
      )}
    </>
  );
};
