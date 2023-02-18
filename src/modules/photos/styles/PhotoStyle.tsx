import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 15px;
`;

export const PhotoHolder = styled.div`
  border-radius: 6px;
  box-shadow: 0 4px 9px rgb(28 97 132 / 80%);
  padding: 10px;
`;

export const Image = styled.img`
  display: flex;
  margin: 0 auto 25px auto;
`;

export const PhotoTitle = styled.p`
  font-size: 16px;
  font-weight: 700;
`;

export const Title = styled.p`
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  width: 100%;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const AlbumActions = styled.div`
  display: flex;
  margin-bottom: 20px;
  justify-content: space-between;
  align-items: center;
`;
