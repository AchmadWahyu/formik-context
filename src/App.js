import React, { useState } from "react";
import "./styles.css";
import UserContextProvider from "./userContext";
import Display from "./Display";
import MyForm from "./MyForm";


export default function App() {
  const [edit, setEdit] = useState(false);

  return (
    <div className="App">
      <UserContextProvider>
        {edit && <MyForm closeForm={() => setEdit(false)} />}
        <Display />
        <button onClick={() => setEdit(true)}>Edit data</button>
      </UserContextProvider>
    </div>
  );
}
