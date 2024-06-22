import React from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import coverhelp from '../assets/img/coverhelp.jpg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: 'E-commerce Frontend (React.js)',
      description: 'A frontend e-commerce platform built with React.js.',
      imgUrl: coverhelp,
    },
    {
      title: 'E-commerce Frontend (React.js)',
      description: 'Another e-commerce frontend built with React.js.',
      imgUrl: coverhelp,
    },
    {
      title: 'TodoList (Node.js & React)',
      description: 'A TodoList application built with Node.js and React.',
      imgUrl: coverhelp,
    },
    {
      title: 'Chat App (React & react-chat-engine)',
      description: 'A framework for building real-time chat applications built with React and react-chat-engine.',
      imgUrl: coverhelp,
    },
    {
      title: 'Laravel Project',
      description: 'A TodoList application built using Laravel.',
      imgUrl: coverhelp,
    },
    {
      title: 'HTML/CSS/JS Project',
      description: 'A small project to learn (Jeu-de-pierre-papier-ciseaux/TicTacToe/small-Quiz/texte-Compteur) built using HTML, CSS, and JS.',
      imgUrl: coverhelp,
    },
    {
      title: 'Creation Portfolio Website (React.js, Node.js, MongoDB)',
      description: 'A project for create a personal portfolio website built with React.js, Node.js, and MongoDB.',
      imgUrl: coverhelp,
    },
  ];

  const projectsDesign = [
    {
      title: 'Figma Prototypes',
      description: 'A mobile app mockup for animal care.',
      imgUrl: coverhelp,
    },
    {
      title: 'Canva',
      description: '5 presentation graphics and prototypes created with Canva.',
      imgUrl: coverhelp,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col xs={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                  <h2>Projects</h2>
                  <p>I've worked on a variety of projects ranging from e-commerce platforms, TodoLists, Laravel projects to mobile app mockups and design prototypes. Here are some of my featured projects:</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Web Development</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Design & Prototyping</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? 'animate__animated animate__slideInUp' : ''}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard
                              key={index}
                              {...project}
                            />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projectsDesign.map((project, index) => (
                            <ProjectCard
                              key={index}
                              {...project}
                            />
                          ))}
                        </Row>
                        <p>In addition to development, I also have experience in design and prototyping. I've created multiple design prototypes using Figma and have a knack for creating visually appealing presentations.</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={coverhelp} alt="Background" />
    </section>
  );
};
