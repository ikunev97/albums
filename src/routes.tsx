import { Route, Routes } from "react-router-dom";
import Layout from "./common/Layout";
import { Albums } from "./modules/albums/Albums";
import { FavouritesContainer } from "./modules/favourites/FavouritesContainer";
import { PhotosContainer } from "./modules/photos/PhotosContainer";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Albums />
          </Layout>
        }
      />
      <Route
        path="/albums/:albumId"
        element={
          <Layout>
            <PhotosContainer />
          </Layout>
        }
      />
      <Route
        path="/favourites"
        element={
          <Layout>
            <FavouritesContainer />
          </Layout>
        }
      />
    </Routes>
  );
};
