import { RouterProvider } from "react-router-dom";
import { useSelector } from "react-redux";

import router from "./router";

import clsx from "clsx";
import style from "./App.module.scss";

function App() {
  const theme = useSelector((state) => state.active.theme);

  return (
    <div className={clsx(style.App, theme && style.light)}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
