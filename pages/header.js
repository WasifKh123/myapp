import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';
import Auth from './authuser';

export default function Header() {
  const { gettoken , logOut} = Auth();
  const token = gettoken();
  // const [isLogin, setisLogin] = useState();
    return (
      <>      <Navbar bg="dark" variant="dark">
        <Container>
          <Link legacyBehavior href="/">
            <a>Home </a>
          </Link>
          {token == null ?
          <>
          <Nav className="me-auto">
            <Link legacyBehavior href="/login">
              login
            </Link>
          </Nav>
          
          </>:
          <>
          <Nav className="me-auto">
            <Link legacyBehavior href="/dashboard">
              dashboard
            </Link>
          </Nav>
          <Nav>
            <Nav.Link  onClick={()=>logOut()} href="">
              Logout
            </Nav.Link>
          </Nav>
          </>
           }
        </Container>
      </Navbar>
        
      </>
    )

}
