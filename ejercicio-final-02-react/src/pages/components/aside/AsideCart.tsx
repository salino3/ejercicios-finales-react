import React from "react";
import { Link } from "react-router-dom";
import { ProductInfo } from "../../../core/Interfaces";
import { form } from "../../../router/Interfaces";
import { Button, Box, Typography } from "@mui/material";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import { GlobalData } from "../../../core/GlobalaData";
import './asideStyles.scss';
import { ListAside } from "./ListAside";

export const AsideCart: React.FC = () => {
  const { state, AllFalses } = React.useContext(GlobalData);
  const { products } = state;

  const handleClick = () => {
        state.products
          .filter((x: ProductInfo) => x.selected === true)
          .map((item: ProductInfo) => AllFalses(item.id));
  };

  return (
    <>
      <aside className="border border-success text-success ">
        <Typography variant="h4">&nbsp; Aside</Typography>
        <Button
          variant="contained"
          className="btnCart"
          onClick={() => handleClick()}
        >
          Empty cart
        </Button>
        <Box className="border border-success  bg-info">
          <LocalGroceryStoreOutlinedIcon className="text-danger" />
        </Box>{" "}
        <ListAside products={products} />
        <Link to={form} className="linkForm  ">
          <PaidOutlinedIcon />
          <p>Go to form to buy items</p>
        </Link>
      </aside>
    </>
  );
};
