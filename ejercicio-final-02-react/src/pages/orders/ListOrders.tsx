import React from 'react';
import { Typography, Box } from "@mui/material";
import { FormData } from '../../core';

interface Props {
    orders: FormData[];
};

export const ListOrders: React.FC<Props> = (props) => {
const {orders} = props;

  return (
    <>
      {orders && orders.length === 0 ? (
        <Typography variant="h3">* The list is Empty *</Typography>
      ) : (
        orders &&
        orders.map((item: FormData, index: number) => (
          <Box className="divListOrders" key={index}>
            <Typography variant="body1">
              Number: <span>{item.id}</span>
            </Typography>
            <Typography variant="body1">
              Supplier: <span>{item.supplier}</span>
            </Typography>
            <Typography variant="body1">
              Date: <span>{item.date}</span>
            </Typography>
            <Typography variant="body1">
              State: <span>{item.state ? "validated" : "invalidated"}</span>
            </Typography>
            <Typography variant="body1">
              {" "}
              Euros: <span>{item.total} €</span>
            </Typography>
          </Box>
        ))
      )}
    </>
  );
}
