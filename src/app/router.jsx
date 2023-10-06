import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AboutPage from "../pages/AboutPage/AboutPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import AuthPage from "../pages/AuthPage/AuthPage";
import Layout from "../widgets/Layout/Layout";
import LoginPage from "../pages/LoginPage/LoginPage";
import CategoriesPage from "../pages/CategoriesPage/CategoriesPage";
import MenuPage from "../pages/MenuPage/MenuPage";
import ClientsPage from "../pages/ClientsPage/ClientsPage";
import NotificationPage from "../pages/NotificationPage/NotificationPage";
import AnalyticPage from "../pages/AnalyticPage/AnalyticPage";
import SettingsPage from "../pages/SettingsPage/SettingsPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
        <Route
          path={"about"}
          element={<AboutPage />}
          errorElement={<ErrorPage />}
        />
        <Route
          path={"categories"}
          element={<CategoriesPage />}
          errorElement={<ErrorPage />}
        />
        <Route
          path={"menu"}
          element={<MenuPage />}
          errorElement={<ErrorPage />}
        />
        <Route
          path={"clients"}
          element={<ClientsPage />}
          errorElement={<ErrorPage />}
        />
        <Route
          path={"notification"}
          element={<NotificationPage />}
          errorElement={<ErrorPage />}
        />
        <Route
          path={"analytic"}
          element={<AnalyticPage />}
          errorElement={<ErrorPage />}
        />
        <Route
          path={"settings"}
          element={<SettingsPage />}
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
