import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Auth from './authuser';
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
}
  from 'mdb-react-ui-kit';
import { useRouter } from 'next/router';
import Dashboard from './dashboard';
export default function Login({ kalo ,value,changestate}) {
  useEffect(() => {
    if (gettoken()) {
    }
  }
    , []);
  const { https, saveToken, gettoken } = Auth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const calllapi = () => {
    https.post('/login', { email: email, password: password })
      .then((Response) => {
        saveToken(Response.data.access_token, JSON.stringify(Response.data.user))
        console.log(JSON.parse(localStorage.getItem("user")).name)
        // console.log(props.value.islogin);
        // changestate();
        router.push("/sidebar")
      })
      .catch((e) => { console.log(e) })
      ;
  }

  return (
    <div>
      <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

        <MDBInput onChange={(e) => { console.log(e.target.value); setEmail(e.target.value) }} wrapperClass='mb-4' label='Email address' id='form1' type='email' />
        <MDBInput onChange={(e) => { console.log(e.target.value); setPassword(e.target.value) }} wrapperClass='mb-4' label='Password' id='form2' type='password' />

        <div className="d-flex justify-content-between mx-3 mb-4">
          <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
          <a href="!#">Forgot password?</a>
        </div>

        <MDBBtn onClick={calllapi} className="mb-4">Sign in</MDBBtn>


      </MDBContainer>
    </div>
  )
}
