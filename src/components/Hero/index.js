import { Container, Row, Col } from "react-bootstrap";
import Typed from "react-typed";

import hero from "./hero.jpg";
import "./styles.css";

const Hero = () => (
  <section className="section section--hero">
    <img className="hero--background" src={hero} alt="Hero" />
    <div className="overlay">
      <Container>
        <Row className="justify-content-center">
          <Col xs={10} md={9} lg={8}>
            <div className="section--hero__content">
              <h1 className="section--hero__title">
                <span>Michael </span>Hernandez Rala
              </h1>
              <p className="section--hero__description">
                <Typed
                  strings={["Chatbot developer", "Backend developer"]}
                  typeSpeed={50}
                  backSpeed={50}
                  loop
                />
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </section>
);

export default Hero;
