import React from "react";
import { GlobalData } from "../../core/GlobalaData";
import { MyState } from "../../core/Interfaces";
import { ListShop } from "./ListShop";
import { Box } from "@mui/material";

import "./shopStyles.scss";


export const ShopPage = () => {
  const { state, CheckboxChange } = React.useContext<MyState>(GlobalData);
   const { products } = state;

  return (
    <>
      <Box className="div_shop">
        <ListShop products={products} CheckboxAction={CheckboxChange}  />
      </Box>
    </>
  );
};
