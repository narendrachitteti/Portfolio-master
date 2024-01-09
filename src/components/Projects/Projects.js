import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import billing from "../../Assets/Projects/billing.png";
import hospital from "../../Assets/Projects/hospital.png";
import suicide from "../../Assets/Projects/suicide.png";
import login12 from "../../Assets/Projects/login12.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hospital}
              isBlog={false}
              title="Hospital Project"
              description="This hospital application streamlines healthcare processes, features like appointment scheduling, real-time patient monitoring, and secure access to medical records build with ReactJs, Material-UI, and MongoDB. It enhances communication between patients and healthcare providers, optimizing the overall efficiency and quality of healthcare services."
              ghLink="https://github.com/narendrachitteti/VN-hms-client"
              demoLink="https://github.com/narendrachitteti/VN-hms-client"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={billing}
              isBlog={false}
              title="Payment Billing"
              description="This payment billing application facilitates adding Items, generating invoices, and tracking payment history. It streamlines billing procedures, enhances for businesses and individuals."
              ghLink="https://github.com/narendrachitteti/Payment_Billing/tree/master"
              demoLink="https://github.com/narendrachitteti/Payment_Billing/tree/master"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={login12}
              isBlog={false}
              title="Login & Signup"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/narendrachitteti/Login-Signup-Reactjs"
              demoLink="https://login-signup-project-git-main-narendrachittetis-projects.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
