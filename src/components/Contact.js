import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactimg from "../assets/img/contactimg.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [bgColor, setBgColor] = useState("#000");

  useEffect(() => {
    const updateBgColor = () => {
      const scrollPosition = window.scrollY;
      const scrollPercentage = (scrollPosition / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      const colorIndex = Math.floor((scrollPercentage / 20));
      const colors = ["#000", "#1a1a1a", "#333", "#4d4d4d", "#666", "#808080"];
      const startColor = colors[colorIndex];
      const endColor = colors[colorIndex + 1];
      const newColor = interpolateColors(startColor, endColor, (scrollPercentage % 20) / 20);
      setBgColor(newColor);
    };

    const interpolateColors = (color1, color2, factor) => {
      if (typeof color1 !== 'string' || typeof color2 !== 'string') {
        return "#000";
      }

      const c1 = color1.match(/\w\w/g)?.map(v => parseInt(v, 16)) || [0, 0, 0];
      const c2 = color2.match(/\w\w/g)?.map(v => parseInt(v, 16)) || [0, 0, 0];

      const interpolatedColor = c1.map((channel, index) => {
        return Math.round(channel + factor * (c2[index] - channel));
      });

      return `#${interpolatedColor.map(v => v.toString(16).padStart(2, '0')).join('')}`;
    };

    window.addEventListener("scroll", updateBgColor);

    return () => {
      window.removeEventListener("scroll", updateBgColor);
    };
  }, []);

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const showAlert = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormDetails(formInitialDetails);
  };

  return (
    <section className="contact" id="connect" style={{ background: bgColor }}>
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactimg} alt="Contact-Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form onSubmit={showAlert}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" value={formDetails.email} placeholder="Email" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" value={formDetails.phone} placeholder="Phone Nbr" onChange={(e) => onFormUpdate('phone', e.target.value)} />
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                      <button type="submit"><span>Send</span></button>
                    </Col>
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
