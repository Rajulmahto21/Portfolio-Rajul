import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/pic.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const circularImageStyles = {
  width: "300px", // Adjust the width and height to your desired circle size
  height: "300px",
  borderRadius: "100%", // This creates a circular shape
  overflow: "hidden", // Hides the parts of the image outside the circle
};

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            <i><b className="purple">Once upon a time in the digital wilderness, I embarked on a journey that led me to become <span className="purple">what i am today </span></b></i>.
              <br />
              <br />My story with coding began when I stumbled upon a mysterious script, a mere digital cipher, that piqued my curiosity. 
              <i>
                <b className="purple"> With each line of code, I unlocked a world of endless possibilities. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <i>
                <b className="purple">I quickly fell in love with the art of programming, and as I dived deeper into the <span className="purple">syntax</span>, </b></i>
                <b className="purple">
                I discovered my passion for crafting innovative solutions.
                </b>
              </i>
              
            </p>

          </Col>
          <Col md={4} className="myAvtar">
          <Tilt>
              <div style={circularImageStyles} className="circular-image">
                <img src={myImg} className="img-fluid" alt="avatar" />
              </div>
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Rajulmahto21"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
          
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/rajul-mahto-313463200/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
