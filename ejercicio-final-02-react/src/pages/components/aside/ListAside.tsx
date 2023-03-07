import React from 'react';
import { Box } from "@mui/material";
import { ProductInfo } from '../../../core';

interface Props {
  products: ProductInfo[];
};

export const ListAside: React.FC<Props> = React.memo((props) => {
    const {products} = props;

  return (
    <Box>
      {products &&
        (products.some((product: ProductInfo) => product.selected) ? (
          products
            .filter((product: ProductInfo) => product.selected === true)
            .map((item: ProductInfo) => (
              <div className="border border-success  text-info " key={item.id}>
                <b> {item.title}</b>
              </div>
            ))
        ) : (
          <h5>The Cart is Empty</h5>
        ))}
    </Box>
  );
});
