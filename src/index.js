import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import Page from "./Page";
import Pages from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>{<App/>}</div>,
  },
  {
    path: "/Destination",
    element: <div>{<Page/>}</div>,
  },
  {
    path: "/Reserver",
    element: <div>{<Pages/>}</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);