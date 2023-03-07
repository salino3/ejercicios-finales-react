import React from "react";
import { useParams } from "react-router-dom";
import { GlobalData } from "../../core/GlobalaData";
import { MyState } from "../../core/Interfaces";
import "./infoStyles.scss";
import { Typography, Box } from "@mui/material";
import { ListProduct } from "./ListProduct";


export const InfoProduct: React.FC = () => {
  const { loadOne, state } = React.useContext<MyState>(GlobalData);
  const { product } = state;

  
  const { id } = useParams();

  React.useEffect(() => {
    loadOne(id);
  }, []);

  return (
    <Box className="infoDiv">
      <Typography variant="h3">
        <u>Info Product</u>
      </Typography>
      <ListProduct product={product} />
    </Box>
  );
};
