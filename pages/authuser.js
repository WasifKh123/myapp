import React from 'react'
import axios from 'axios'
import { useState } from 'react';
import { useRouter } from 'next/router';
export default function Auth() {
    const hello = "myworld";
    const [token , settoken] = useState();
    const [user , setuser] = useState();
    const router = useRouter();
    const logOut = ()=>{
        if (typeof window !== 'undefined') {
            // Perform localStorage action
            const item = localStorage.getItem('token')

            if (item) {localStorage.clear()}
          }
          router.push("/login")
    }
    // const router = useRouter()
    const gettoken = ()=>{
        if (typeof window !== 'undefined') {
            // Perform localStorage action
            // console.log("token found");
            const item = localStorage.getItem('token')
            return item;
          }
       return null 
    }
    // const getuser = ()=>{return JSON.parse(localStorage.getItem("user"))}
    const saveToken = (token,user) => {
        localStorage.setItem("token",token);
        localStorage.setItem("user",user);
        settoken(token);
        setuser(user);
        // router.push("/")
    } 
    const https = axios.create(
        {
            baseURL:"http://localhost:8000/api/auth",
            headers:{
                "Content-Type":"application/json",
                 "Authorization":`Bearer ${gettoken()}`

            }
        }
    )
    return {https,saveToken,gettoken,logOut}
}
