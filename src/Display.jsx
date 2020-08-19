import React, { useContext } from "react";
import { UserContext } from "./userContext";

const Display = () => {
  const { users } = useContext(UserContext);
  console.log(users);
  const renderData = () => {
    return users.map(user => {
      console.log(user);
      return (
        <div key="user.email">
          <div>{user.firstName}</div>
          <div>{user.lastName}</div>
          <div>{user.email}</div>
          <div>{user.color}</div>
        </div>
      );
    });
  };
  return (
    <>
      <h1>Data</h1>
      <div>{renderData()}</div>
    </>
  );
};

export default Display;
