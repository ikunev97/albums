import styled from "styled-components";

export const AlbumsTitle = styled.p`
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

export const AlbumsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
  grid-gap: 10px;
`;

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
