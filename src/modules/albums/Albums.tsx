import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAlbums,
  selectIsLoading,
} from "../../redux/selectors/AlbumsSelector";
import { AppDispatch } from "../../redux/store";
import { getAlbums } from "../../services/AlbumsService";
import { AlbumsWrapper } from "./AlbumsStyle";
import { Button, Title } from "../../common/CommonStyles";
import { Loading } from "../../common/Loading";

export const Albums = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getAlbums());
  }, [dispatch]);

  const albums = useSelector(selectAlbums);
  const isLoading = useSelector(selectIsLoading);

  if (isLoading) return <Loading />;

  return (
    <>
      <Title style={{ textAlign: "left" }}>Albums:</Title>
      <AlbumsWrapper>
        {Object.entries(albums).map(([key]) => {
          return (
            <Button
              height="40px"
              width="70px"
              onClick={() => navigate(`/albums/${key}`)}
              key={key}
            >
              {key}
            </Button>
          );
        })}
      </AlbumsWrapper>
    </>
  );
};
