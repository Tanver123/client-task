import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../../Images/footer-logo.png";

function Footer() {
  return (
    <div className="footer__area py-5">
      <Container>
        <Row>
          <Col xs={12} sm={6} md={4}>
            <div>
              <h2>Contact</h2>
              <p>info@framefitness.com</p>
            </div>
            <div>
              <h3>Frame Innovative Technologies Corp.</h3>
              <p>
                265 S. Western Avenue P.O. Box #741940 Los Angeles, CA
                90004-9998
              </p>
            </div>
            <div className="footer__social__icon text-start">
              <ul>
                <li>
                  <i class="fab fa-facebook"></i>
                </li>
                <li>
                  <i class="fab fa-twitter"></i>
                </li>
                <li>
                  <i class="fab fa-instagram"></i>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={4} className="text-center">
            <img src={logo} alt="" />
          </Col>
          <Col md={4} className="text-end">
            <div>
              <p>Terms & Condition</p>
            </div>
            <div className="footer__text d-flex text-end">
              <p>©Copyright 2021 </p>
              <p>Frame is patent pending</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
