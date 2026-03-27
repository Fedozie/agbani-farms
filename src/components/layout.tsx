import { Outlet } from "react-router-dom";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import {ScrollToTop} from "./scrollToTop";

const Layout = () => {
  return (
    <>
      <ScrollToTop/>
      <div className="page-transition-overlay"></div>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export { Layout };
