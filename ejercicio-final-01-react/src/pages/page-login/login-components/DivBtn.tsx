import { Button } from '@mui/material';
import React from 'react';


export const DivBtn: React.FC = () => {

  return (
          <div className="d-flex align-items-center justify-content-center m-5">
          <Button className="m-2 w-20" variant="contained" type="submit">
            Login
          </Button>
        </div>
  )
};
