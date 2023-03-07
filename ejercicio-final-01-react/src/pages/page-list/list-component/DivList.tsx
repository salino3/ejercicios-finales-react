import React from 'react'
import { MemberEntity } from '../interfaces';
import { Member } from './Member';
import { Box } from "@mui/material";


interface Props {
    members: MemberEntity[];
};


export const DivList: React.FC<Props> = React.memo((props) => {
const {members} = props;

  return (
      <Box className="list-user-list-container ">
        <span className="list-header">&nbsp; Avatar</span>
        <span className="list-header">&nbsp; Id</span>
        <span className="list-header">&nbsp; Name</span>
        {members.map((member) => (
          <Member
            login={member.login}
            key={member.id}
            id={member.id}
            avatarUrl={member.avatar_url}
          />
        ))}
      </Box>
  );
});
