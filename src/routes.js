import React from "react";
import { Route } from "react-router-dom";
import Splash from "./components/Splash";
import ProductPage from "./pages/ProductPage";
import MainMenu from "./pages/MainMenu";
import ProductPage from "./pages/ProductPage";



const routes = [
  {
    path: "/",
    element: <Splash />
  },
  {
    path: "/shop",
    element: <MainMenu />
  },
  {
    path: "/product/:id",
    element: <ProductPage />
  }
];

export default routes;