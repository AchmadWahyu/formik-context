import React, { createContext, useReducer } from "react";
import { userReducer } from "./userReducer";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [users, dispatch] = useReducer(userReducer, [
    {
      firstName: "Joko",
      lastName: "Towo",
      email: "joko@gmail.com",
      color: "red"
    }
  ])
  return (
    <UserContext.Provider value={{users, dispatch}}>
      {children}
    </UserContext.Provider>);
};

export default UserContextProvider;
