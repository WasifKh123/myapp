import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import Auth from './authuser'
import dynamic from "next/dynamic";
import Sidebar from './sidebar';
import Login from '../components/login';

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
    useEffect(()=>{

        console.log("han mein login ka use effect hun")
        if(!gettoken()){
            console.log("hello");
            router.push("/login");
            setislogin(false)
        }
        else{
            console.log("mein bhi kahi chala tha")
            setislogin((prev)=>true)
        }
    }
    
    ,[islogin])
   
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
