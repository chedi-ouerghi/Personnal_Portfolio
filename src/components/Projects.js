import React from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import coverhelp from '../assets/img/coverhelp.jpg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

const projects = [
  {
    title: 'Site Web de Création de Portfolios',
    description: 'Conçu et développé un site web de portfolio en utilisant React.js, Node.js et MongoDB comme projet final pour Gomycode.',
    imgUrl: coverhelp,
  },
  {
    title: 'E-commerce de Vente de Lunettes',
    description: 'Développement d\'une plateforme de vente en ligne de lunettes en utilisant React.js, Node.js et MySQL.',
    imgUrl: coverhelp,
  },
  {
    title: 'Site de Cartes de Films 2023-2024',
    description: 'Conception et développement d\'un site web de cartes de films en utilisant React.js, Node.js et MySQL.',
    imgUrl: coverhelp,
  },
  {
    title: 'Gestion des Employeurs (Backend) 2023-2024',
    description: 'Développement d\'une application backend pour la gestion des employeurs en utilisant Node.js et SQL Server.',
    imgUrl: coverhelp,
  },
  {
    title: 'Application de Boutique en Ligne (Frontend)',
    description: 'App mobile en React Native avec navigation, panier, paiement, gestion de localisations et affichage des produits. Design responsive.',
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
];


const projectsDesign = [
  {
    title: 'Landing Page Pizza',
    description: 'Conception d\'une landing page pour une pizzeria avec des animations au défilement pour une expérience utilisateur engageante. Le design met en avant des éléments interactifs et une présentation visuelle appétissante qui attirent l\'attention des visiteurs.',
    imgUrl: coverhelp,
  },
  {
    title: 'Crypto Trading',
    description: 'Création d\'une landing page pour une plateforme de trading de cryptomonnaies avec des animations au défilement. Le design se concentre sur une interface utilisateur moderne et dynamique, avec des graphiques interactifs et des éléments visuels qui mettent en valeur les fonctionnalités de la plateforme.',
    imgUrl: coverhelp,
  },
  {
    title: 'Pet Haven - Pet Adoption Mobile',
    description: 'Design d\'une application mobile pour l\'adoption d\'animaux de compagnie avec Figma. Le projet inclut une interface conviviale pour les utilisateurs souhaitant adopter des animaux, avec des animations fluides et un design attrayant qui facilite la navigation et l\'interaction.',
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
