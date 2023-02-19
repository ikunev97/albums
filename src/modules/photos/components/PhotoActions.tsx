import { useNavigate } from "react-router-dom";
import { Button } from "../../../common/CommonStyles";
import { AlbumActions } from "../styles/PhotoStyle";
import { Title } from "../../../common/CommonStyles";

type IPhotoActions = {
  albumId: number;
  albumsLength: number;
};

export const PhotoActions = ({ albumId, albumsLength }: IPhotoActions) => {
  const navigate = useNavigate();

  return (
    <AlbumActions>
      {albumId === 1 ? (
        <Button width="100px" height="25px" onClick={() => navigate(`/`)}>
          ALBUMS
        </Button>
      ) : (
        <Button
          width="100px"
          height="25px"
          onClick={() => navigate(`/albums/${albumId - 1}`)}
        >
          PREVIOUS
        </Button>
      )}

      <Title>Album: {albumId}</Title>
      {albumId === albumsLength ? null : (
        <Button
          width="100px"
          height="25px"
          onClick={() => navigate(`/albums/${albumId + 1}`)}
        >
          NEXT
        </Button>
      )}
    </AlbumActions>
  );
};
