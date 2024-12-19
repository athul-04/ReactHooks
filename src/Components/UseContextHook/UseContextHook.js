import React, { createContext } from "react";
import ChildComponent from "./ChildComponent";
import { useState,useContext } from "react";

export const UserContext=createContext();

export default function UseContextHook() {
    const [user,setUser]=useState("Athul")
    const id=1;

  return (
    <UserContext.Provider value={{user:user,id:1}}>
        <ChildComponent />
    </UserContext.Provider>
  )
}
