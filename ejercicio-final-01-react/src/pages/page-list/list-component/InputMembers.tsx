import { Button, TextField } from '@mui/material';
import React from 'react';

interface Props {
  handleClick: (value: string) => void;
  myclass: string;
  handleChange: (field: string) => void;
  value: string;
  name: string;
};

export const InputMembers: React.FC<Props> = (props) => {
 const { handleClick, myclass, handleChange, value, name } = props;


  React.useEffect(() => {
    handleClick(value);
  }, []);

  return (
    <div className={myclass}>
      <label className="mt-2" htmlFor="company">
        <b>Look for company users: &nbsp;</b>
      </label>
      <br />
      <TextField
        className="inputList1  border border-primary"
        type="text"
        required
        name={name}
        placeholder={"Text a company name"}
        onChange={(event) => handleChange(event.target.value)}
        value={value}
        variant="outlined"
      />

 
      <Button
        variant="outlined"
        color="primary"
        onClick={() => handleClick(value)}
        type="submit"
        className="mx-2"
      >
        Search
      </Button>
    </div>
  );
}
