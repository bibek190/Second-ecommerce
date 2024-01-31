import React from "react";
import MyContext from "./myContext";

const myState = (props) => {
  const state = {
    name: "Rubisha Shrestha",
    rollno: 13,
  };

  const color = "red";

  return (
    <MyContext.Provider value={{ state, color }}>
      {props.children}
    </MyContext.Provider>
  );
};

export default myState;
