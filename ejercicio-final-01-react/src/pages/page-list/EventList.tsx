import React from 'react';
import { MemberEntity } from "./interfaces";


export const EventList = () => {

    const [members, setMembers] = React.useState<MemberEntity[]>([]);
    const [searching, setSearching] = React.useState<string>("lemoncode");
    
    const handleSubmit = (searching: string) => {
        fetch(`https://api.github.com/orgs/${searching}/members`)
        .then((response) => response.json())
        .then((json) => setMembers(json))
        .catch((err) => console.log(err));
    };

    return {
      members,
      setMembers,
      searching,
      setSearching,
      handleSubmit
    };
};
