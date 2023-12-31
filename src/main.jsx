import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Prices from "./pages/prices/Prices.jsx";
import Gallery from "./pages/gallery/Gallery.jsx";
import Welcome from "./pages/welcome/Welcome.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/accueil",
        element: <Welcome />,
      },
      {
        path: "/tarifs",
        element: <Prices />,
      },
      {
        path: "/galerie",
        element: <Gallery />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
