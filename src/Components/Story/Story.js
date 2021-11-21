import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Story() {
  return (
    <Container className="story__section">
      <Row className="align-items-center justify-content-center">
        <Col className="align-self-center" xs={12} sm={6} md={6}>
          <div className="d-flex justify-content-center">
            <h1 className="story__title">Our Story</h1>
          </div>
        </Col>
        <Col xs={12} sm={6} md={6}>
          <div>
            <p>
              Melissa Bentivoglio and Lee Belzberg have paired together their
              extensive backgrounds of elite fitness instruction and
              entrepreneurship to bring you Frame—a groundbreaking approach to
              pilates disrupting the traditional at-home fitness market.{" "}
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Story;
