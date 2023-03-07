import { Typography, Box } from '@mui/material';
import React from 'react';
import { MemberDetailEntity } from '../interfaces';

interface Props {
  member: MemberDetailEntity;
  id: string;
};

export const DetailList: React.FC<Props> = (props) => {
const {member, id} = props;

  return (
    <Box className="divP rounded">

      <Typography variant="h3">Hello from Detail page </Typography>
      <Typography variant="h4">
        User Id: <span>{id}</span>
      </Typography>

      <Box>
        <Typography className="m-1" variant="body1">
          {" "}
          id: {member.id}
        </Typography>
        <Typography className="m-1" variant="body1">
          {" "}
          login: {member.login}
        </Typography>
        <Typography className="m-1" variant="body1">
          {" "}
          name: {member.name}
        </Typography>
        <Typography className="m-1" variant="body1">
          {" "}
          company: {member.company}
        </Typography>
        <Typography className="m-1" variant="body1">
          {" "}
          bio: {member.bio}
        </Typography>
      </Box>
    </Box>
  );
}
