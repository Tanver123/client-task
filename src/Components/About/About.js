import React from "react";
import { Col, Row } from "react-bootstrap";
import Banner from "../../Images/banner.png";

function About() {
  return (
    <>
      <section>
        <Row className="align-items-center justify-content-center">
          <Col md={8}>
            <div className="banner__image__area">
              <img className="banner__img" src={Banner} alt="" />
            </div>
            <Row className="p-5">
              <Col md={6}>
                <h4 className="banner__sub__section__text">
                  Mark Mastrov
                  <br /> Investor, Board of Director
                </h4>
                <p>
                  Mark Mastrov is an American businessman who was born in
                  Oakland, CA. In addition to serving on the board and investing
                  in Frame, he is the founder and former CEO of 24-Hour Fitness
                  as well as many other fitness ventures worldwide. Mastrov is
                  also a member of the Sacramento Kings ownership group.
                </p>
              </Col>
              <Col md={6}>
                <h4 className="banner__sub__section__text">
                  Michael Bruno
                  <br /> Investor
                </h4>
                <p>
                  Michael Bruno is the owner and CEO of Core Health and Fitness.
                  Core Health & Fitness is the world’s largest privately-held
                  marketer and distributor of commercial fitness solutions to
                  health clubs, community recreational centers, hotels,
                  government, educational facilities and more.
                </p>
              </Col>
            </Row>
          </Col>
          <Col md={4}>
            <div className="banner__text__area">
              <div>
                <h3 className="banner__title">
                  Melissa Bentivoglio
                  <br /> CEO & Co-Founder
                </h3>
                <p>
                  Melissa Bentivoglio is a classically trained ballet dancer and
                  a renowned pilates and fitness instructor. Melissa credits her
                  dedication to pilates as having changed her life after years
                  of elite level performance. In 2018, she designed her own
                  proprietary reformer for use in her own studio. By launching
                  Frame, she hopes to make pilates more widely available and
                  accessible, so that everyone has a chance to improve their
                  quality of life.
                </p>
              </div>
              <div>
                <h3 className="banner__title">
                  Lee Belzberg <br /> Co-Founder
                </h3>
                <p>
                  {" "}
                  Following in the footsteps of his family, Lee Belzberg
                  continues the Belzberg legacy with Frame. He seeks to combine
                  his deep expertise of wealth management, real-estate banking,
                  and private equity with his passion for health and wellness.
                  Lee is excited to venture into new frontiers and take his
                  strategic vision and entrepreneurial spirit to the
                  digital-fitness startup space.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </section>
      <div className="social__icon">
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
    </>
  );
}

export default About;
