import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  padding-left: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  background: #1c6184;
  color: #ffff;
  a:not(:first-child) {
    margin-left: 20px;
  }
`;

const activeStyle = {
  fontWeight: "700",
};

const Header = () => {
  return (
    <Wrapper>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        to="/"
      >
        ALBUMS
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        to="/favourites"
      >
        FAVOURITES
      </NavLink>
    </Wrapper>
  );
};

export default Header;
