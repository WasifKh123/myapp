import React, { useContext, useEffect, useState } from 'react'
import Home from './home'
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import ColorContext from './colorContext';
export default function Effect() {
    const [data,setData]=useState([]);
    const color = useContext(ColorContext);
    useEffect(()=>{
        console.log("hello mein"+color.state)
      axios.get('https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001')
      .then((Response)=>{
        // console.log(Response.data)
        // Response.data.map((record)=>console.log(record.id))
        setData(Response.data)
        console.log(data)
    })
      .catch((error)=>console.log(error))
      console.log("i am color :"+color);  
    },[])
  return (
    <div><Home/>
    
    <Table striped bordered hover variant={color.state?"dark":"light"}>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {
            data.map((row,index)=>
             (  
                <tr>
                    <td>
                     {row.id}
                    </td>
                    <td>
                     {row.firstName}
                    </td>
                    <td>
                     {row.lastName}
                    </td>
                    <td>
                     {row.email}
                    </td>
                    <td>
                     {row.age}
                    </td>

                </tr>
            )
            )
        }
      </tbody>
    </Table>
    </div>
  )
}
