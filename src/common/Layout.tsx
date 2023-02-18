import { ReactNode } from "react";
import styled from "styled-components";
import Header from "./Header";

type ILayout = {
  children: ReactNode;
};

export const Wrapper = styled.div`
  padding: 20px;
`;

const Layout = ({ children }: ILayout) => {
  return (
    <>
      <Header />
      <Wrapper>{children}</Wrapper>
    </>
  );
};

export default Layout;
