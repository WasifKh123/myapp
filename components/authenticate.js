import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import Auth from '../pages/authuser';
import dynamic from "next/dynamic";
import Sidebar from '../components/sidebar';
import Login from './login';

const Authenticate=({children}) => {
    const {gettoken} = Auth();
    const token = gettoken();
    const router = useRouter()
    const [islogin,setislogin]= useState(false)
    const value = "wasif"
    // const changestate = ()=>{
    //     console.log("change state chal rha hai")
    //     setislogin(true)
    
    // }

   
  return (
    <div>
        <>{console.log(islogin)}</>
        { 
        token!==null ? 
        <Sidebar>
        {children}
        </Sidebar>:
        <>
        <Login />
        </>
        }
        
    </div>
  )
}
export default dynamic (() => Promise.resolve(Authenticate), {ssr: false})
