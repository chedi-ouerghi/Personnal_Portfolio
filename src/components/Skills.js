import nodejsimg from "../assets/img/nodejsimg.png";
import download11 from "../assets/img/download11.png";
import download33 from "../assets/img/download33.png";
import download22 from "../assets/img/download22.png";
import htmlcss from "../assets/img/htmlcss.png";
import download77 from "../assets/img/download77.png";
import canva from "../assets/img/canva.png";
import reactjss from "../assets/img/reactjss.png";
import sql from "../assets/img/sql.png";
import nosql from "../assets/img/nosql.png";
import reactnativeui from "../assets/img/reactnativeui.png";
import vuejsui from "../assets/img/vuejsui.png";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const skills = [
    { name: 'Node.js', image: nodejsimg },
    { name: 'React.js', image: reactjss },
    { name: 'React Native.js', image: reactnativeui },
    { name: 'Vue.js', image: vuejsui },
    { name: 'PHP', image: download11 },
    { name: 'HTML/CSS', image: htmlcss },
    { name: 'Laravel', image: download22 },
    { name: 'Python', image: download33 },
    { name: 'Figma', image: download77 },
    { name: 'Canva', image: canva },
    { name: 'SQL (MySQL, SQL Server, Oracle)', image: sql },
    { name: 'NoSQL (MongoDB)', image: nosql }
  ];

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
              <p>
                I'm proficient in various technologies and tools that help me build robust and user-friendly web applications.
                From backend technologies like Node.js, PHP, and Python to frontend frameworks like React.js, Vue.js , React Native
                I ensure seamless functionality and captivating user experiences.
                Additionally, my design skills encompass both UI/UX design using Figma and Canva, ensuring the visual appeal of my projects.
                Moreover, I'm well-versed in database management with SQL databases like MySQL, SQL Server, Oracle, and NoSQL databases like MongoDB.
              </p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            {skills.map((skill, index) => (
                                <div className="item" key={index}>
                                    <img src={skill.image} alt={skill.name} className="img_skills" />
                                    <h5>{skill.name}</h5>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <div className="background-image-left"  alt="Image" />
    </section>
  )
}
