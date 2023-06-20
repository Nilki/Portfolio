import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assests/img/contact-img.svg";

export const Contact = () => {
  const fromInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    messsage: "",
  };

  const [fromDetails, setFormDetails] = useState(fromInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...fromDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending... ");
    let response = await fetch("https://localhost:5000/contact", {
      method: "POST",
      header: {
        "Content-Type": "Application/json;charset=utf-8",
      },
      body: JSON.stringify(fromDetails),
    });
    setButtonText("Send");
    let result = response.json();
    setFormDetails(fromInitialDetails);
    if (result.code === 200) {
      setStatus({
        success: true,
        message: "Message sent successfully",
      });
    } else {
      setStatus({
        success: false,
        message: "Somthing went wrong, Please try again",
      });
    }
  };
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="contact us" />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={fromDetails.firstName}
                    placeholder="First Name"
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={fromDetails.lastName}
                    placeholder="Last Name"
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    value={fromDetails.email}
                    placeholder="Email Address"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    value={fromDetails.phone}
                    placeholder="Phone No."
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  />
                </Col>
                <Col>
                  <textarea
                    row="6"
                    value={fromDetails.messsage}
                    placeholder="Message"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                  />
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
                {status.message && (
                  <Col>
                    <p
                      className={
                        status.success === false ? "danger" : "success"
                      }
                    >
                      {status.message}
                    </p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
