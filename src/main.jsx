import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Tarifs from "./pages/tarifs/Tarifs.jsx";
import Galerie from "./pages/galerie/Galerie.jsx";
import Accueil from "./pages/accueil/Accueil.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/accueil",
        element: <Accueil />,
      },
      {
        path: "/tarifs",
        element: <Tarifs />,
      },
      {
        path: "/galerie",
        element: <Galerie />,
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
