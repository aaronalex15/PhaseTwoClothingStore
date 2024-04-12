import React from "react";
import { Route } from "react-router-dom";
import Splash from "./pages/Splash";
<<<<<<< HEAD
import ProductPage from "./components/ProductPage";
=======
import ProductPage from "./pages/ProductPage";

>>>>>>> 7594ddb6ba461f2f4767b301313cbbd0f994bc22
const routes = [
  {
    path: "/",
    element: <Splash />
  },
  {
    path: "/shop",
    element: <ProductPage />
  }
];

export default routes;