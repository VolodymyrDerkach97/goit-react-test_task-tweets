import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import { HeaderStyled } from "./Layout.styled";

const Layout = () => {
  return (
    <>
      <HeaderStyled>
        <Navigation />
      </HeaderStyled>
      <Suspense fallback={null}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </>
  );
};

export default Layout;
