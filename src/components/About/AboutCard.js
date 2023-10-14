import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
        <p style={{ textAlign: "justify" }}>
  Hello! I'm <span className="purple">Rajul Mahto</span> a tech enthusiast and problem solver with a passion for crafting innovative solutions. My technical toolkit includes <span className="purple">Python, C, C++, Linux, Java, SQL, Machine Learning, Deep Learning, HTML, JavaScript, R, Heuristic Algorithm Hybridization, Algorithm Optimization, RNA-seq, and Transcriptomic Analysis.</span> I've put my skills to the test in various projects, from creating a cancer detection model to developing a real-time cryptocurrency tracking website. When I'm not coding, <span className="purple">I'm exploring new languages, hitting the gym</span>, and enjoying some friendly competition in games.
</p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Learning new languages
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Work even harder until success is yours!!"{" "}
          </p>
          <footer className="blockquote-footer">Rajul</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
