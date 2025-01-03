import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import billing from "../../Assets/Projects/farmstore1.png";
import hospital from "../../Assets/Projects/hospital.png";
import login12 from "../../Assets/Projects/cocopeat122.png";

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
              title="JANANI"
              description="This hospital application streamlines healthcare processes, features like appointment scheduling, real-time patient monitoring, and secure access to medical records build with ReactJs, Material-UI, and MongoDB. It enhances communication between patients and healthcare providers, optimizing the overall efficiency and quality of healthcare services."
              ghLink="https://github.com/narendrachitteti/VN-hms-client"
              demoLink="https://github.com/narendrachitteti/VN-hms-client"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={billing}
              isBlog={false}
              title="FARM E-STORE"
              description="An e-commerce platform dedicated to agricultural products, including fertilizers, chemicals, seeds, and farming tools. It streamlines product browsing, purchasing, and invoice generation for farmers and agricultural businesses."
              ghLink="https://farme-store.vercel.app/"
              demoLink="https://farme-store.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={login12}
              isBlog={false}
              title="Tirumala CocoPeat"
              description="An online platform focused on cocopeat-based products, such as cocopeat bricks, blocks, and grow bags. It facilitates easy browsing and ordering of eco-friendly growing mediums for gardening and agricultural needs."
              ghLink="https://tirumalacocopeat.vercel.app/"
              demoLink="https://tirumalacocopeat.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
