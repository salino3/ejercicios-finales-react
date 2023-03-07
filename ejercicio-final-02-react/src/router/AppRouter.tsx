import React from 'react';
import { Routes, Route } from "react-router-dom";
import { FormProducts, ShopPage } from '../pages';
import { AsideCart, NavBar } from '../pages/components';
import { Home } from '../pages/home-folder/Home';
import { InfoProduct } from '../pages/info-product/InfoProduct';
import { ViewOrders } from '../pages/orders/ViewOrders';
import { Box } from "@mui/material";
import { form, root, shop, info, orders } from './Interfaces';


export const AppRouter = () => {
  return (
    <Box className="divContainer">
      <Routes>
        <Route path={root} element={<Home />} />
        <Route path={shop} element={<ShopPage />} />
        <Route path={form} element={<FormProducts />} />
        <Route path={info} element={<InfoProduct />} />
        <Route path={orders} element={<ViewOrders />} />
      </Routes>
      <AsideCart />
    </Box>
  );
}
