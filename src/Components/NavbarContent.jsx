import React from 'react';
//import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link } from 'react-scroll';
import PhoneIcon from '@mui/icons-material/Phone';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import MenuIcon from '@mui/icons-material/Menu';

function NavbarContent() {

  return (
    <header className="header-area">
      <Navbar className="shadow-light shadow-sm m-0 p-0" collapseOnSelect expand="lg">

        <Navbar.Brand href="/" >
          <img className="site-logo" src="/assets/car-gear_2.png" alt="img" />
          <span>CAR REPAIR </span>
        </Navbar.Brand>

        <Navbar.Toggle className="nav-toggler" aria-controls="basic-navbar-nav">
          <i><MenuIcon /></i>
        </Navbar.Toggle>

        <Navbar.Collapse className='navbar-collapse' id="responsive-navbar-nav">
          <Nav className="navbar-nav">
            <li className="nav-item">
              <Link offset={-100} smooth={true} duration={500} className="nav-link _active" to="home-top" style={{ fontFamily: "Roboto" }}>
                Accueil
              </Link>
            </li>
            <li className="nav-item">
              <Link offset={-50} smooth={true} duration={500} className="nav-link" to="why-us" style={{ fontFamily: "Roboto" }}>
                Pourquoi Nous ?
              </Link>
            </li>
            <li className="nav-item">
              <Link offset={-50} smooth={true} duration={500} className="nav-link" to="our-services" style={{ fontFamily: "Roboto" }}>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link offset={-50} smooth={true} duration={500} className="nav-link" to="about-us" style={{ fontFamily: "Roboto" }}>
                &nbsp;A Propos&nbsp;
              </Link>
            </li>
            <li className="nav-item">
              <Link offset={-50} smooth={true} duration={500} className="nav-link" to="testimonials" style={{ fontFamily: "Roboto" }}>
                Ce qu'ils disent
              </Link>
            </li>
            <li className="nav-item">
              <Link offset={-50} smooth={true} duration={500} className="nav-link" to="contact-us" style={{ fontFamily: "Roboto" }}>
                Contact
              </Link>
            </li>
          </Nav>
          <div className="account">
            <i><PhoneIcon /></i>
            <span>Appel : +226 70xxxxxx</span>
          </div>

        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default NavbarContent;
