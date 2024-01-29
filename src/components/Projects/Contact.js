// import React from "react";
// import { Container, Row, Col, Form ,Button} from "react-bootstrap";
// import Particle from "../Particle";

// function Contact() {
//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const formData = new FormData(event.target);
//     const response = await fetch("https://formspree.io/f/xgedgjkr", {
//       method: "POST",
//       body: formData,
//       headers: {
//         Accept: "application/json",
//       },
//     });

//     if (response.ok) {
//       console.log("Form submitted successfully");
//     } else {
//       console.error("Form submission failed");
//     }
//   };
//   return (
//     <section>
//       <Container fluid className="home-section" id="home">
//         <Particle />
//         <Container className="home-content">
//           <Row>
//             <Col md={7}>
//               <Form onSubmit={handleSubmit}>
//                 <Form.Group className="mb-3" controlId="formName">
//                   <Form.Label>Your Name</Form.Label>
//                   <Form.Control type="text"name="username" placeholder="Enter your name" />
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="formEmail">
//                   <Form.Label>Email address</Form.Label>
//                   <Form.Control type="email"name="_replyto" placeholder="Enter your email" />
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="formMessage">
//                   <Form.Label>Message</Form.Label>
//                   <Form.Control as="textarea"name="message" rows={4} placeholder="Your message" />
//                 </Form.Group>

//                 <Button variant="primary" type="submit">
//                   Submit
//                 </Button>
//               </Form>
//             </Col>
//           </Row>

//         </Container>
//       </Container>
      
//     </section>
//   );
// }

// export default Contact;
// import React, { useState } from "react";
// import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import Particle from "../Particle";

// function Contact() {
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const response = await fetch("https://formspree.io/f/xgedgjkr", {
//       method: "POST",
//       body: JSON.stringify(formData),
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//     });

//     if (response.ok) {
//       console.log("Form submitted successfully");
//     } else {
//       console.error("Form submission failed");
//     }
//   };

//   return (
//     <section>
//       <Container fluid className="home-section" id="home">
//         <Particle />
//         <Container className="home-content">
//           <Row>
//             <Col md={7}>
//               <Form onSubmit={handleSubmit}>
//                 <Form.Group className="mb-3" controlId="formName">
//                   <Form.Label>Your Name</Form.Label>
//                   <Form.Control
//                     type="text"
//                     name="username"
//                     value={formData.username}
//                     onChange={handleChange}
//                     placeholder="Enter your name"
//                   />
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="formEmail">
//                   <Form.Label>Email address</Form.Label>
//                   <Form.Control
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     placeholder="Enter your email"
//                   />
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="formMessage">
//                   <Form.Label>Message</Form.Label>
//                   <Form.Control
//                     as="textarea"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     rows={4}
//                     placeholder="Your message"
//                   />
//                 </Form.Group>

//                 <Button variant="primary" type="submit">
//                   Submit
//                 </Button>
//               </Form>
//             </Col>
//           </Row>
//         </Container>
//       </Container>
//     </section>
//   );
// }

// export default Contact;
import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Particle from "../Particle";

function Contact() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log("Form data updated:", formData);
  };
  

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("Submitting form with data:", formData);

    const response = await fetch("https://formspree.io/f/xgedgjkr", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (response.ok) {
      console.log("Form submitted successfully");
    } else {
      console.error("Form submission failed");
    }
  };

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7}>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>E-Mail me:</Form.Label><br/>
                  <Form.Label>chittetinarendra2000@gmail.com</Form.Label><br/><br/>
                  <Form.Label>Github:</Form.Label><br/>
                  <Form.Label>https://github.com/narendrachitteti</Form.Label>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>LinkedIn:</Form.Label><br/>
                  <Form.Label>https://www.linkedin.com/in/narendrachitteti800/</Form.Label>
                </Form.Group>

                
              </Form>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Contact;
