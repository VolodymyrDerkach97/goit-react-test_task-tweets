import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Navigation from "../Navigation";
import { HeaderStyled, MainStyled } from "./Layout.styled";

const Layout = () => {
  return (
    <>
      <HeaderStyled>
        <Navigation />
      </HeaderStyled>
      <Suspense fallback={null}>
        <MainStyled>
          <Outlet />
        </MainStyled>
      </Suspense>
    </>
  );
};

export default Layout;
