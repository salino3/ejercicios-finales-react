import React from 'react'
import { Link } from 'react-router-dom'
import { InputNav } from './nav-components/InputNav'
import { ListNav } from './nav-components/ListNav'
import { Button, TextField } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

export const NavBar: React.FC = () => {

  return (
    <nav className="bg-warning pb-2">
      <div className="d-flex mx-5 ">
        <div className="m-3 mx-5">
          <Link to={"/"}>
            <Button className=" w-100" variant="contained" type="submit">
              <HomeOutlinedIcon />
            </Button>
          </Link>
        </div>
        <h1 className="text-info">Nav Bar</h1>{" "}
      </div>
      <div className="divNavComponents">
        <ListNav />
        <InputNav />
      </div>
    </nav>
  );
}
