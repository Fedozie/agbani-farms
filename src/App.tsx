import { lazy, Suspense, useState, useCallback } from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { Layout, Loader } from "./components";

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

  const [loading, setLoading] = useState(true);
  const handleComplete = useCallback(() => setLoading(false), []);

  return (
    <>
      {loading && <Loader onComplete={handleComplete} />}
      <Suspense fallback={null}>
        <Routes location={location} key={location.pathname}>
          <Route element={<Layout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/contact-us" element={<ContactUsPage ready={!loading} />} />
            <Route path="/news" element={<NewsPage ready={!loading} />} />
            <Route path="/about-us" element={<AboutUsPage ready={!loading} />} />
            <Route path="/services" element={<ServicesPage ready={!loading} />} />
            <Route path="/products" element={<ProductsPage ready={!loading} />} />
            <Route path="/services/:slug" element={<ProductDetailsPage />} />
            <Route path="/news/:slug" element={<NewsDetailsPage />} />
          </Route>

          {/* Outside layout — no Navbar/Footer */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
