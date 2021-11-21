import React from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
import logo from "../../Images/logo.png";
import FrameLogo from "../../Images/frame__logo.png";
import { Wave } from "react-animated-text";

function Header() {
  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        sticky="top"
        collapseOnSelect
        expand="lg"
      >
        <Navbar.Brand className="ms-5">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link className="nav__link text-white" to="/">
            The Reformer
          </Nav.Link>
          <Nav.Link className="nav__link text-white" to="/">
            Workouts
          </Nav.Link>
          <Nav.Link className="nav__link text-white" to="/">
            About
          </Nav.Link>
          <Nav.Link className="nav__icon text-white" to="/">
            <i className="far fa-user-circle"></i>
          </Nav.Link>
          <Nav.Link className="nav__icon text-white cart__icon me-3" to="/">
            <i className="fas fa-briefcase">
              <span className="cart__quantity">2</span>
            </i>
          </Nav.Link>
          <Button className="shop__btn">SHOP NOW</Button>
        </Navbar.Collapse>
      </Navbar>
      <section className="sticky__text d-flex">
        <Wave effect="stretch" effectChange={2.2} text="MADE FOR MOTION" />
        <img className="frame__logo" src={FrameLogo} alt="" />
      </section>
    </>
  );
}

export default Header;
