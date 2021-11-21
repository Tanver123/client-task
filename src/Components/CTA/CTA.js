import React from "react";

import { Col, Row, Button } from "react-bootstrap";

function CTA() {
  return (
    <>
      <Row className="CTA__AREA text-center">
        <Col>
          <h1 className="cta__title">GET MOVING</h1>
          <Button className="mt-3 shop__btn">SHOP NOW</Button>
        </Col>
      </Row>
    </>
  );
}

export default CTA;
