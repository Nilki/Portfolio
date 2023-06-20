import { Container, Row, Col, TabPane, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCards";
import colorSharp2 from "../assests/img/color-sharp.png";
import projImg1 from "../assests/img/project-img1.png";
import projImg2 from "../assests/img/project-img2.png";
import projImg3 from "../assests/img/project-img3.png";

export const Projects = () => {
  const projects = [
    {
      title: "Business Startup",
      description: "Design and development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design and development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design and development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design and development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design and development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design and development",
      imgUrl: projImg3,
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab Three</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <TabPane eventKey="second"> Loren Ipsum</TabPane>
                <TabPane eventKey="third"> Loren Ipsum</TabPane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
        <img className="background-image-right" alt="bg" src={colorSharp2} />
      </Container>
    </section>
  );
};
