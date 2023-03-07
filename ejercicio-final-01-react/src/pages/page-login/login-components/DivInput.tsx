import { TextField, Typography } from '@mui/material';
import React from 'react';

interface Props {
  value: string;
  setValue: (value: React.SetStateAction<string>) => void;
  h3Txt?: string;
  myClass?: string;
};

export const DivInput: React.FC<Props> = (props) => {
const { value, setValue, h3Txt, myClass } = props;

  return (
    <div className="divInput">
      <Typography variant="h3" className={myClass}>
        {h3Txt}
      </Typography>
      <Typography variant="body1" className="m-1 mt-3 ">
        Username:{" "}
      </Typography>

      <TextField
        label="Label del Input"
        variant="filled"
        color="primary"
        className="rounded border bg-white border-success "
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
