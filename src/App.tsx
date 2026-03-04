import { lazy, Suspense } from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { Layout } from "./components/layout";

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

const ProductsAndServicesPage = lazy(() =>
  import("./pages/productsAndServicesPage").then((module) => ({
    default: module.ProductsAndServicesPage,
  })),
);

const NotFoundPage = lazy(() =>
  import("./pages/notFoundPage").then((module) => ({
    default: module.NotFoundPage,
  })),
);

function App() {
  const location = useLocation();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route
            path="/products-and-services"
            element={<ProductsAndServicesPage />}
          />
        </Route>

        {/* Outside layout — no Navbar/Footer */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
