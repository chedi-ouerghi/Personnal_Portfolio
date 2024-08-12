import { Container, Row, Col } from "react-bootstrap";
import { FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import footerIcon from "../assets/img/footerIcon.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} sm={4} className="text-center text-sm-start mb-4 mb-sm-0">
            <img src={footerIcon} alt="Logo" className="footer-logo" />
            <p className="footer-text mt-3">Discover my portfolio and stay updated!</p>
          </Col>
          <Col xs={12} sm={4} className="text-center mb-4 mb-sm-0">
            <p className="footer-text">Stay connected with us:</p>
            <div className="social-icons">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaTwitter />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaFacebookF />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaLinkedinIn />
              </a>
            </div>
          </Col>
          <Col xs={12} sm={4} className="text-center text-sm-end">
            <p className="footer-copyright">© 2024. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
      <style jsx>{`
        .footer {
          background-color: #000; 
          padding: 20px 0;
          color: #fff;
          border-top: 1px solid #333;
        }
        .footer-logo {
          max-width: 150px;
        }
        .footer-text {
          margin-top: 10px;
          font-size: 14px;
        }
        .social-icons {
          margin-top: 10px;
        }
        .social-icon {
          color: #fff;
          font-size: 20px;
          margin: 0 10px;
          transition: color 0.3s ease;
        }
        .social-icon:hover {
          color: #1da1f2; /* Twitter color */
        }
        .social-icon:nth-child(2):hover {
          color: #3b5998; /* Facebook color */
        }
        .social-icon:nth-child(3):hover {
          color: #0077b5; /* LinkedIn color */
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
