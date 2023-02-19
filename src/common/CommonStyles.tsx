import styled from "styled-components";

export const Button = styled.div<{ height: string; width: string }>(
  (props) => ({
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: props.width,
    height: props.height,
    borderRadius: "6px",
    background: "#1c6184",
    fontWeight: 600,
    color: "#fff",
    cursor: "pointer",
  })
);

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

export const PhotoHolder = styled.div`
  border-radius: 6px;
  box-shadow: 0 4px 9px rgb(28 97 132 / 80%);
  padding: 10px;
`;

export const IconHolder = styled.div`
  display: flex;
  justify-content: end;
  margin-bottom: 10px;
`;

export const ImageHolder = styled.div`
  width: 100%;
  max-width: 150px;
  height: 100%;
  max-height: 150px;
  margin: 0 auto 15px auto;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const PhotoTitle = styled.p`
  font-size: 16px;
  font-weight: 700;
`;
