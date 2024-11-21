import React from 'react'
import {useState,useContext,createContext} from 'react';

const conContext=createContext();

const useContent=()=>{
    return useContext(conContext);
}

const ContProvider = ({children}) => {
    const [data,setData]=useState([]);
  return (
    <conContext.Provider value={{data,setData}}>
        {children}
    </conContext.Provider>
  )
}


export {useContent};
export default ContProvider;