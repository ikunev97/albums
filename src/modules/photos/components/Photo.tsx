import { memo } from "react";
import { AddToFavouriteIcon } from "../../../common/AddToFavouritesIcon";
import { RemoveFromFavouritesIcon } from "../../../common/RemoveFromFavouritesIcon";
import { IPhoto } from "../../../types";
import { PhotoHolder, Image, PhotoTitle } from "../styles/PhotoStyle";

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
        <RemoveFromFavouritesIcon
          onClick={() => removeFromFavourites(photoItem)}
        />
      ) : (
        <AddToFavouriteIcon onClick={() => addToFavourites(photoItem)} />
      )}

      <Image src={photoItem.thumbnailUrl} alt={photoItem.title} />

      <PhotoTitle>{photoItem.title}</PhotoTitle>
    </PhotoHolder>
  );
};

export default memo(Photo);
