import React from 'react';
import { Box } from "@mui/material";
import "./detailStyles.scss";

interface Props {
    children: React.ReactNode;
};

export const DetailContainer: React.FC<Props> = ({children}) => {

  return (
    <Box className='detail_container'>
        {children}
    </Box>
  )
} 
