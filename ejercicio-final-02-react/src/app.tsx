import React from "react";
import { AppRouter } from "./router/AppRouter";
import { BrowserRouter } from "react-router-dom";
import { MyProvider } from "./core/MyProvider";
import { AsideCart } from "./pages/components/aside/AsideCart";
import { NavBar } from "./pages/components";

export const App = () => {
  return (
    <MyProvider>
      <BrowserRouter>
        <NavBar />
        <AppRouter />
      </BrowserRouter>
    </MyProvider>
  );
};
