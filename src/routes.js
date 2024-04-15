import React from "react";
import Splash from "./pages/Splash";
import MainMenu from "./pages/MainMenu";
import Cart from "./pages/Cart";

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
    element: <Cart />
  }
];

export default routes;