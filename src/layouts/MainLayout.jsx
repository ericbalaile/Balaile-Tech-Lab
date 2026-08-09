import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Header from "../components/layout/Header.jsx";
import Footer from "../components/layout/Footer.jsx";

function MainLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default MainLayout;
