import React from 'react';
import { Typography, Box } from "@mui/material";
import { ProductInfo } from '../../core';


interface Props {
  products: ProductInfo[];
  CheckboxAction: (id: string) => void;
};

export const ListShop: React.FC<Props> = (props) => {
 const {products, CheckboxAction} = props;

  return (
    <>
      {products &&
        products.map((item: ProductInfo) => (
          <Box
            className="border border-info bg-dark  rounded  m-2  p-1"
            key={item.id}
          >
            <Typography>
              Number: &nbsp;<span>{item.id}</span>
            </Typography>
            <Typography>
              Title: &nbsp;<span> {item.title}</span>
            </Typography>
            <img
              className="border border-sucess m-1"
              src={item.picUrl}
              alt="product image"
              width="100"
            />
            <Typography >
              Precio: &nbsp;
              <span >{item.price} €</span>
            </Typography>
            <input
              type="checkbox"
              checked={item.selected}
              onChange={() => CheckboxAction(item.id)}
            />
          </Box>
        ))}
    </>
  );
}
