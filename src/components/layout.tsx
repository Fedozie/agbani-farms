import { Outlet } from "react-router-dom";
import { Navbar } from "./navbar";
import { DiscoverMore } from "./discoverMore";
import { Footer } from "./footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <DiscoverMore />
      <Footer />
    </>
  );
};

export { Layout };