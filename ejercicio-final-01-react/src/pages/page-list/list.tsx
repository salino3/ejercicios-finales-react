import React from "react";
import { EventList } from "./EventList";
import { DivList } from "./list-component/DivList";
import { InputMembers } from "./list-component/InputMembers";
import { ListContainer } from "./list-styles/ListContainer";


export const ListPage: React.FC = () => {

  const { members, searching, setSearching, handleSubmit } = EventList();

  return (
    <ListContainer>
      <InputMembers
        handleClick={handleSubmit}
        myclass={"divInputClass"}
        handleChange={setSearching}
        value={searching}
        name={searching}
      />
      <DivList members={members} />
    </ListContainer>
  );
};
