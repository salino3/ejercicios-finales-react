import React from 'react';
import { Typography, Box } from "@mui/material";
import { ProductInfo } from '../../core';

interface Props {
  product: ProductInfo;
};

export const ListProduct: React.FC<Props> = (props) => {
 const {product} = props;

  return (
      <Box>
        <Typography variant="h5">
          Id product: <span>{product?.id}</span>
        </Typography>{" "}
        <Typography variant="h5">
          Image product: <span>{product?.title}</span>
        </Typography>{" "}
        <Typography variant="h5">
          Price product: <span>{product?.price}</span>
        </Typography>
        <img src={`/${product?.picUrl}`} alt="product image" />
      </Box>

  );
}
