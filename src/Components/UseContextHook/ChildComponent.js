import React from 'react'
import { useState,useContext } from "react";
import { UserContext } from './UseContextHook';

export default function ChildComponent() {
    const user=useContext(UserContext);
  return (
    <div>
        {`The logged in user is ${user.user}`}
      
    </div>
  )
}
