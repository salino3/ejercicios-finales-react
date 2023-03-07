import React from 'react';
import { MemberDetailEntity } from './interfaces';

const createDefaultMemberDetail = () => ({
  id: "",
  login: "",
  name: "",
  company: "",
  bio: "",
  avatar_url: "",
});

export const EventDetail = (id: string) => {

      const [member, setMember] = React.useState<MemberDetailEntity>(
        createDefaultMemberDetail()
      );

      React.useEffect(() => {
        fetch(`https://api.github.com/users/${id}`)
          .then((response) => response.json())
          .then((json) => setMember(json));
      }, []);

  return {
    member,
    setMember
  }
};
