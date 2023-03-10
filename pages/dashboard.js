import { Router, useRouter } from 'next/router';
import React, { useState,useEffect } from 'react'
import Auth from './authuser';

export default function Dashboard() {
    const { https,gettoken } = Auth();
    const [me, setMe] = useState();
    const router = useRouter();
    useEffect(() => {
        if(!gettoken())router.push("/login")
        fetchdetail()

    }, [])
    const fetchdetail = () => {

        https.post('/me').then((res)=>console.log(res.data)).catch((err)=>console.log("error agya  hai"));
    }

    return (
        
        <div>dashboard</div>
    )
}
