import { Container, Row, Col } from "react-bootstrap";
// import { FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import footerIcon from "../assets/img/footerIcon.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} sm={6} className="text-center text-sm-start mb-4 mb-sm-0">
            <img src={footerIcon} alt="Logo" className="footer-logo" />
          </Col>
          <Col xs={12} sm={6} className="text-center text-sm-end">
            <p className="footer-text">Stay connected with us:</p>
            <p className="footer-intro">Discover my portfolio.</p>
          </Col>
          <Col xs={12} className="text-center">
            <p className="footer-copyright">© 2024. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
      <style jsx>{`
        .footer {
          background-color: #191931; 
          padding: 20px 0;
          color: #fff;
        }
        .footer-logo {
          max-width: 150px;
        }
        .footer-text, .footer-intro {
          margin-top: 10px;
          font-size: 14px;
        }
        .footer-intro {
          opacity: 0.8; 
        }
        .footer-copyright {
          font-size: 12px;
          margin-top: 20px;
        }

        /* Media Query for small screens */
        @media (max-width: 767px) {
          .text-center.text-sm-start {
            text-align: center;
          }
        }
      `}</style>
    </footer>
  )
}

