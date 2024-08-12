import { useState } from "react";
import { Container } from "react-bootstrap";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
// import { FcDocument } from "react-icons/fc";

export const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className={`sticky-top ${navOpen ? "open" : ""}`}>
      <Container fluid >
        <div className="responsive-nav-alignement">
          <div style={{display:'flex', alignItems:'normal',width:'100%',height:'100%'}}>
        <div style={{ display: 'flex', alignItems: 'center',width:'100%',height:'100%' }}>
        <div className="logoNav">Chedi Ouerghi</div>
        <div className="hamburger" onClick={toggleNav}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
          </div>
            </div>
        <ul className={`nav-links ${navOpen ? "open" : ""}`}>
          <li><a href="#home" onClick={toggleNav}>Home</a></li>
          <li><a href="#skills" onClick={toggleNav}>Skills</a></li>
          <li><a href="#projects" onClick={toggleNav}>Projects</a></li>
          <li><a href="#connect" onClick={toggleNav}>Contact</a></li>
          {/* Exemple de liens avec des boutons */}
          {/* <li><button className="login-button" onClick={toggleNav}>Login</button></li> */}
          {/* <li><button className="join-button" onClick={toggleNav}>Join</button></li> */}
           <span className="navbar-text">
          <div className="social-icon">
            <a href="https://www.linkedin.com/in/chedi-ouerghi-21860a24a/" id="linkedin-icon"><FaLinkedin /></a>
            <a href="https://github.com/chedi-ouerghi" id="github-icon"><FaGithub /></a>
            <a href="https://twitter.com/" id="twitter-icon"><FaTwitter /></a>
          </div>
        </span>
            </ul>
            </div>
            
          </div>
       
      </Container>
    </nav>
  );
};
