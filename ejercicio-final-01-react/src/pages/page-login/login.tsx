import React from "react";
import { LoginContainer } from "./login-styles/loginContainer";
import { DivInput } from "./login-components/DivInput";
import { DivBtn } from "./login-components/DivBtn";
import { EventsLogin } from "./EventsLogin";

export const LoginPage: React.FC = () => {

  const {
    username, 
    setUsername,
    password, 
    setPassword,
    handleNavigation
  } = EventsLogin();

  return (
    <LoginContainer>
      <form className="bg-info p-2 rounded " onSubmit={handleNavigation}>
        <DivInput
          value={username}
          setValue={setUsername}
          h3Txt={" Hello from login page"}
          myClass={"bg-success p-2 rounded"}
        />
        <DivInput value={password} setValue={setPassword} />
         <DivBtn />
      </form>
    </LoginContainer>
  );
};
