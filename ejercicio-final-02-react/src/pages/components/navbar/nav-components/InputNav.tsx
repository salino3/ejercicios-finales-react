import React from "react";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Card from "./Card";


export const InputNav: React.FC = React.memo(() => {

  const navigate = useNavigate();

  const [first, setFirst] = React.useState<string>();
  const [toggle, setToggle] = React.useState<boolean>(false);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event: any) => 
   { setFirst(event.target.value);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event: any) => {
    event.preventDefault();
    //
    let Searching: string = "";
    if (
      event &&
      event.target &&
      event.target.product &&
      event.target.product.value
    ) {Searching = event.target.product.value};

    navigate(`/info/${Searching}`);
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="product" className="text-success bg-white px-1 rounded">
        Look for with number product
      </label>
      <br />
      <TextField
        className=""
        onChange={handleChange}
        type="text"
        value={first || ""}
        name="product"
        required
      />

      <button
        disabled={toggle ? false : true}
        className="btn btn-primary m-1"
        type="submit"
      >
        Search
      </button>
      <div className="divCard">
        <Card first={first} setFirst={setFirst} setToggle={setToggle} />
      </div>
    </form>
  );
});
