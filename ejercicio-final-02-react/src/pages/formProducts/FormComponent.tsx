import React from 'react';
import { Button, Box, Checkbox, TextField } from "@mui/material";
import { FormData } from './InterfaceForm';

interface Props {
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
  handleChange: ( field: keyof FormData ) => React.ChangeEventHandler<HTMLInputElement>;
  dataForm: FormData;
  myTotal2: number;
};

export const FormComponent: React.FC<Props> = React.memo((props) => {
    
 const { handleSubmit, handleChange, dataForm, myTotal2 } = props;

  return (
    <form
      className="border border-dark border-dark-3 text-black w-50 rounded  "
      id="myForm"
      onSubmit={handleSubmit}
    >
      <Box>
        <label htmlFor="Number">&nbsp; Number:</label> <br />
        <TextField
          type="number"
          name="id"
          required
          value={dataForm.id}
          onChange={handleChange("id")}
        />
      </Box>{" "}
      <Box>
        <label htmlFor="supplier">&nbsp; Supplier:</label> <br />
        <TextField
          type="text"
          name="supplier"
          value={dataForm.supplier}
          onChange={handleChange("supplier")}
          required
        />
      </Box>
      <Box>
        <label htmlFor="date">&nbsp; Date:</label> <br />
        <TextField
          type="date"
          value={dataForm.date}
          onChange={handleChange("date")}
          name="date"
          required
        />
      </Box>{" "}
      <Box>
        <label htmlFor="total">&nbsp; Total: </label> <br />
        <Box className="divMyTotal2 border border-warning p-2  w-25 rounded">
          {myTotal2}
        </Box>
      </Box>
      <Box>
        <label htmlFor="state">&nbsp; State:</label>
        <Checkbox
          onChange={handleChange("state")}
          checked={dataForm.state}
          name="state"
          required
        />
      </Box>
      <Button
        disabled={dataForm.state ? false : true}
        variant="contained"
        color="primary"
        type="submit"
        className="btnForm"
      >
        Submit
      </Button>
    </form>
  );
});
