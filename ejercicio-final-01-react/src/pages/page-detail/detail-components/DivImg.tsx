import React from 'react';
import { Link } from 'react-router-dom';
import {  Box } from "@mui/material";

interface Props {
    avatar: string;
};


export const DivImg: React.FC<Props> = ({avatar}) => {
    
  return (
      <Box className="divImg rounded">
        <Link className="Linkdetail" to="/list">
          Back to list page
        </Link>
        <img src={avatar} alt="Avatar" /> 
      </Box>
      ); 
}
