import React from "react";
import { useContext } from 'react';
import { createContext } from "react";
import { useState } from "react";

export const GlobalContext=createContext();


function Context({children}) {
    const userdev =useContext(GlobalContext)
    const [globaluser,setglobaluser]=useState(userdev.globaluser || false);
    const isglobaluser=(val)=>setglobaluser(val);

    const store ={
        globaluser,
        isglobaluser,
    }
  return (
    <>
    <GlobalContext.Provider value={store}>
      {children}
    </GlobalContext.Provider>
    </>
  )
}

export default Context