import React from "react";
import { Link } from "react-router-dom";
import { shop } from "../../router/Interfaces";
import { Typography, Box } from "@mui/material";
import "./homeStyles.scss";

export const Home: React.FC = () => {


  return (
    <Box className="divHome">
      <Typography variant="h4" className="mt-5">Welcome to the e-commerce!</Typography>
      <Box className="divImgHome ">
        <Link className="bg-white p-2  rounded" to={shop}>
          Go to the shop
        </Link>
        <br />
        <img
          className="mt-5 rounded"
          src="assets/images/cart1.jpg"
          width="500"
          alt="cart"
        />
      </Box>
    </Box>
  );
};
