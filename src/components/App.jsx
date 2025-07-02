import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";
import ScrollToTop from "./ScrollToTop/ScrollToTop";
import { lazy, Suspense } from "react";
import Loader from "./Loader/Loader";

const NotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));
const SearchResultsPage = lazy(() =>
  import("../pages/SearchResultsPage/SearchResultsPage")
);
const MovieDetailsPage = lazy(() =>
  import("../pages/MovieDetailsPage/MovieDetailsPage")
);
const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const MovieCast = lazy(() => import("./MovieCast/MovieCast"));
const MovieReviews = lazy(() => import("./MovieReviews/MovieReviews"));

const App = () => {
  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <NavBar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<SearchResultsPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="credits" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;
