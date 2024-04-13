import React from "react";
import { Route } from "react-router-dom";
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