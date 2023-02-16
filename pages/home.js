import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';

export default function Home() {
  return (
    <>      <Navbar bg="dark" variant="dark">
    <Container>
    <Link legacyBehavior href="/home">
        <a>Home </a>
        </Link>
      <Nav className="me-auto">
        <Link legacyBehavior href="/effect">
        <a>Use Effect </a>
        </Link>
        <Link legacyBehavior href="/state">
        Use State
        </Link>
        <Link legacyBehavior href="/context">
        Use Context
        </Link>
        <Link href="/memo">
        Use Memo
        </Link>

        <Link legacyBehavior href="/callback">
        &nbsp; Use Callback
        </Link>

      </Nav>
    </Container>
  </Navbar></>
  )
}
