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
import RequireAuth from "../features/HOC/RequireAuth";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
        <Route
          path={"menu"}
          element={
            <RequireAuth>
              <MenuPage />
            </RequireAuth>
          }
          errorElement={<ErrorPage />}
        />
        <Route
          path={"categories"}
          element={
            <RequireAuth>
              <CategoriesPage />
            </RequireAuth>
          }
          errorElement={<ErrorPage />}
        />
        <Route
          path={"clients"}
          element={
            <RequireAuth>
              <ClientsPage />
            </RequireAuth>
          }
          errorElement={<ErrorPage />}
        />
        <Route
          path={"notification"}
          element={
            <RequireAuth>
              <NotificationPage />
            </RequireAuth>
          }
          errorElement={<ErrorPage />}
        />
        <Route
          path={"analytic"}
          element={
            <RequireAuth>
              <AnalyticPage />
            </RequireAuth>
          }
          errorElement={<ErrorPage />}
        />
        <Route
          path={"settings"}
          element={
            <RequireAuth>
              <SettingsPage />
            </RequireAuth>
          }
          errorElement={<ErrorPage />}
        />
      </Route>
      <Route
        path={"about"}
        element={<AboutPage />}
        errorElement={<ErrorPage />}
      />
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
