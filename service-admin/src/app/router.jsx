import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AboutPage from "../pages/AboutPage/AboutPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import AuthPage from "../pages/AuthPage/AuthPage";
import Layout from "../widgets/Layout/Layout";
import LoginPage from "../pages/LoginPage/LoginPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
        <Route
          path={"home"}
          element={<HomePage />}
          errorElement={<ErrorPage />}
        />
        <Route
          path={"about"}
          element={<AboutPage />}
          errorElement={<ErrorPage />}
        />
      </Route>
      <Route
        path={"auth"}
        element={<AuthPage />}
        errorElement={<ErrorPage />}
      />
      <Route
        path={"login"}
        element={<LoginPage />}
        errorElement={<ErrorPage />}
      />
      <Route path="*" element={<NotFoundPage />} />
    </>
  )
);

export default router;
