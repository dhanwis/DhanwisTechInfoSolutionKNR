import "./ErpDevelopment.css";
import { Container, Row, Col } from "react-bootstrap-v5";

function ErpDevelopment() {
  return (
    <div className="container">
      <div className="row">
        <Col>
          <div style={{ width: "100%" }}>
            <div className="py-5 ld-fancy-heading ld_fancy_heading_6585270055965">
              {" "}
              <h1 className="d-sm-none d-lg-block ld-fh-element lqd-highlight-underline lqd-highlight-grow-left text-decoration-default">
                {" "}
                ERP Development
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
                      <h1>Enterprise Resource Planning (ERP) development </h1>
                    </div>

                    <div>
                      <p className="mt-3">
                        The development of Enterprise Resource Planning (ERP)
                        software involves the integration of multiple business
                        processes and functions into a cohesive system.
                      </p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <img
                      src="/img/development/erp1.jpg"
                      alt=""
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
                      src="/img/development/dm2.jpg"
                      alt=""
                      width={"500px"}
                      height={"auto"}
                    />
                  </div>

                  <div className="mt-4 ms-lg-5">
                    <div>
                      <h1>Human Resource Management System (HRMS)</h1>
                    </div>

                    <div>
                      <p className="mt-3">
                        An HRMS or Human Resource Management System is a type of
                        software that automates and simplifies various human
                        resource management processes in an organization
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

export default ErpDevelopment;
