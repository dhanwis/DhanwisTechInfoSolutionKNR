import "./GraphicDesign.css";
import { Container, Row, Col } from "react-bootstrap-v5";

function GraphicDesign() {
  return (
    <div className="container">
      <div className="row">
        <Col>
          <div style={{ width: "100%" }}>
            <div className="py-5 ld-fancy-heading ld_fancy_heading_6585270055965">
              {" "}
              <h1 className="d-sm-none d-lg-block ld-fh-element lqd-highlight-underline lqd-highlight-grow-left text-decoration-default">
                {" "}
                Graphic Design
                {/* &amp;  */}
              </h1>
            </div>
          </div>
        </Col>

        <section className="section1">
          <Container>
            <Row className="mt-2">
              <Col>
                <div className="android p-5 one">
                  <div className="left-side">
                    <div>
                      <h1>Graphic Design Services</h1>
                    </div>

                    <div>
                      <p className="mt-3">
                        Graphic design services encompass a wide range of visual communication solutions aimed at creating compelling and aesthetically pleasing designs. From logo design to branding materials and digital assets, our graphic design services cater to the diverse needs of businesses seeking to enhance their visual identity and connect with their target audience effectively.
                      </p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <img
                      src='/img/graphic-design/graphic-design-service.jpg'
                      alt="Graphic Design"
                      width={"500px"}
                      height={"auto"}
                    />
                  </div>
                </div>
              </Col>

              <div className="line-long-area">
                <div className="line-long"></div>
              </div>

              <Col>
                <div className="android p-5 one">
                  <div className="left-side mt-4">
                    <img
                      src="./img/graphic-design/graphic-design-concepts.jpg"
                      alt="Graphic Design Concepts"
                      width={"500px"}
                      height={"auto"}
                    />
                  </div>

                  <div className="mt-4 ms-lg-5">
                    <div>
                      <h1>Logo Design</h1>
                    </div>

                    <div>
                      <p className="mt-3">
                        Logo design is a crucial aspect of brand identity creation. Our logo design services focus on crafting unique and memorable logos that represent the essence and values of your business. Whether you're starting a new venture or rebranding an existing one, our team of experienced designers ensures that your logo stands out and leaves a lasting impression on your audience.
                      </p>
                    </div>
                  </div>
                </div>
              </Col>



            </Row>
          </Container>
        </section>

      </div>
    </div>
  );
}

export default GraphicDesign;
