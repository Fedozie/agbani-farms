import { lazy, Suspense } from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { Layout, Loader, } from "./components";

const LandingPage = lazy(() =>
  import("./pages/landingPage").then((module) => ({
    default: module.LandingPage,
  })),
);

const ContactUsPage = lazy(() =>
  import("./pages/contactUsPage").then((module) => ({
    default: module.ContactUsPage,
  })),
);

const NewsPage = lazy(() =>
  import("./pages/newsPage").then((module) => ({ default: module.NewsPage })),
);

const AboutUsPage = lazy(() =>
  import("./pages/aboutUsPage").then((module) => ({
    default: module.AboutUsPage,
  })),
);

const ServicesPage = lazy(() =>
  import("./pages/servicesPage").then((module) => ({
    default: module.ServicesPage,
  })),
);

const ProductsPage = lazy(() =>
  import("./pages/productsPage").then((module) => ({
    default: module.ProductsPage,
  })),
);

const NotFoundPage = lazy(() =>
  import("./pages/notFoundPage").then((module) => ({
    default: module.NotFoundPage,
  })),
);

const NewsDetailsPage = lazy(() =>
  import("./pages/newsPage/newsDetails").then((module) => ({
    default: module.NewsDetails,
  })),
);

const ProductDetailsPage = lazy(() =>
  import("./pages/servicesPage/productsDetails").then((module) => ({
    default: module.ProductDetails,
  })),
);

function App() {
  const location = useLocation();

  return (
    <Suspense fallback={<Loader />}>
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/services/:slug" element={<ProductDetailsPage />} />
          <Route path="/news/:slug" element={<NewsDetailsPage />} />
        </Route>

        {/* Outside layout — no Navbar/Footer */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
