import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo2 from '../../images/logo2.png';
import './index.scss'
const Navbars = () => {
  return (
    <div>
    <Navbar className='nav' expand="lg">
    <Container fluid>
      <Link to={'/'}>
      <img className='logo' src={logo2} alt="logo"/>
      </Link>
      
      <Navbar.Toggle aria-controls="navbarScroll" className='text-white' />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Link to={'/'} className='text-white nav-link'>Home</Link>
          <Nav.Link className='text-white'>about</Nav.Link>
          <Nav.Link className='text-white'>services</Nav.Link>
          <Nav.Link className='text-white'>contact</Nav.Link>


        </Nav>
        <Form className="d-flex text-white">
          <Form.Control
            type="search"
            id='search'
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button className='btn'>Search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    </div>
  )
}

export default Navbars
