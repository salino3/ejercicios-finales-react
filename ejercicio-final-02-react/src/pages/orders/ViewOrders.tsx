import React from "react";
import { GlobalData, MyState } from "../../core";
import { ListOrders } from "./ListOrders";
import { Box } from "@mui/material";
import './orderStyles.scss';


export const ViewOrders = () => {
  const { state, loadOrders } = React.useContext<MyState>(GlobalData);

  const { orders } = state;

  React.useEffect(() => {
    loadOrders();
  }, []);

  console.log(orders);

  return (
    <Box className="divOrders">
      <ListOrders orders={orders} />
    </Box>
  );
};
