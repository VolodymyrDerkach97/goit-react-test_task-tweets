import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

const Layout = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <Suspense fallback={null}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </>
  );
};

export default Layout;
