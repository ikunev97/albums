import { memo } from "react";
import { AddToFavouriteIcon } from "./AddToFavouritesIcon";
import { RemoveFromFavouritesIcon } from "./RemoveFromFavouritesIcon";
import { IPhoto } from "../types";
import {
  PhotoHolder,
  Image,
  PhotoTitle,
  ImageHolder,
  IconHolder,
} from "./CommonStyles";

type IPhotoProps = {
  isFavouriteItem: boolean;
  photoItem: IPhoto;
  removeFromFavourites: (photoItem: IPhoto) => void;
  addToFavourites: (photoItem: IPhoto) => void;
};

const Photo = ({
  isFavouriteItem,
  photoItem,
  removeFromFavourites,
  addToFavourites,
}: IPhotoProps) => {
  return (
    <PhotoHolder key={photoItem.id}>
      {isFavouriteItem ? (
        <IconHolder>
          <RemoveFromFavouritesIcon
            onClick={() => removeFromFavourites(photoItem)}
          />
        </IconHolder>
      ) : (
        <IconHolder>
          <AddToFavouriteIcon onClick={() => addToFavourites(photoItem)} />
        </IconHolder>
      )}
      <ImageHolder style={{ width: "150px", height: "150px" }}>
        <Image src={photoItem.thumbnailUrl} alt={photoItem.title} />
      </ImageHolder>
      <PhotoTitle>{photoItem.title}</PhotoTitle>
    </PhotoHolder>
  );
};

export default memo(Photo);
