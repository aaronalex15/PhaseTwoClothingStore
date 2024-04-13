import React from "react";
import { Route } from "react-router-dom";
import Splash from "./components/Splash";
import ProductPage from "./pages/ProductPage";
import Splash from "./pages/Splash";
import MainMenu from "./pages/MainMenu";




const routes = [
  {
    path: "/",
    element: <Splash />
  },
  {
    path: "/shop",
    element: <MainMenu />
  }
];

export default routes;