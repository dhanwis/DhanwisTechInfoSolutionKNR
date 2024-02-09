import "./Softdevelopment.css";
import { Container, Row, Col } from "react-bootstrap-v5";

function Softdevelopment() {
  return (
    <div className="container">
      <div className="row">
        <Col>
          <div style={{ width: "100%" }}>
            <div className="py-5 ld-fancy-heading ld_fancy_heading_6585270055965">
              {" "}
              <h1 className="d-sm-none d-lg-block ld-fh-element lqd-highlight-underline lqd-highlight-grow-left text-decoration-default">
                {" "}
                Software Development
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
                      <h1>Customer Relationship Management (CRM) </h1>
                    </div>

                    <div>
                      <p className="mt-3">
                        CRM development is all about building software
                        applications that assist businesses in managing their
                        interactions with potential and current customers. These
                        systems are specifically designed to streamline various
                        processes such as sales, marketing, customer service,
                        and support.
                      </p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <img
                      src='/img/development/soft1.jpg'
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
                      src="./img/development/img4.jpg"
                      alt=""
                      width={"500px"}
                      height={"auto"}
                    />
                  </div>

                  <div className="mt-4 ms-lg-5">
                    <div>
                      <h1>Custom Software Development</h1>
                    </div>

                    <div>
                      <p className="mt-3">
                        Tailored software development is a process of creating
                        customized software solutions that cater to the unique
                        needs and requirements of a particular business or
                        organization.
                      </p>
                    </div>
                  </div>
                </div>
              </Col>

              <div className="mt-5 text-center">
                <div className="wpb_wrapper">
                  <div className="ld-fancy-heading ld_fancy_heading_658527062806c">
                    {" "}
                    <h2 className="ld-fh-element lqd-highlight-underline lqd-highlight-grow-left text-decoration-default">
                      {" "}
                      Our Technologies
                    </h2>
                  </div>
                  <div className="ld-fancy-heading ld_fancy_heading_658527062c148">
                    {" "}
                    <p className="ld-fh-element lqd-highlight-underline lqd-highlight-grow-left text-decoration-default">
                      {" "}
                      We unleash your business potential by maximising the
                      innovation.
                    </p>
                  </div>
                </div>
              </div>

              {/* strip animated */}
              <div class="col-12 mt-2 mb-5">
                <ul class="partnerslist mt-5">
                  <li>
                    <img
                      class="loadimg"
                      src="/img/development/icons8-react-100.png"
                      data-src="https://srvinfotech.com/public/img/partners/g-cloud.png"
                      alt="Google Cloud"
                      data-loaded="true"
                    />
                  </li>
                  <li>
                    <img
                      class="loadimg"
                      src="/img/development/icons8-kotlin-48.png"
                      data-src="https://srvinfotech.com/public/img/partners/duns.png"
                      alt="DUNS"
                      data-loaded="true"
                    />
                  </li>
                  <li>
                    <img
                      class="loadimg"
                      src="/img/development/icons8-flutter-48.png"
                      data-src="https://srvinfotech.com/public/img/partners/clutch.png"
                      alt="Clutch"
                      data-loaded="true"
                    />
                  </li>
                  <li>
                    <img
                      class="loadimg"
                      src="/img/development/icons8-nodejs-48.png"
                      data-src="https://srvinfotech.com/public/img/partners/nasscom.svg"
                      alt="NASSCOM"
                      data-loaded="true"
                    />
                  </li>

                  <li>
                    <img
                      class="loadimg"
                      src="/img/development/icons8-python-48.png"
                      data-src="https://srvinfotech.com/public/img/partners/duns.png"
                      alt="DUNS"
                      data-loaded="true"
                    />
                  </li>
                  <li>
                    <img
                      class="loadimg"
                      src="/img/development/icons8-c++-48.png"
                      data-src="https://srvinfotech.com/public/img/partners/clutch.png"
                      alt="Clutch"
                      data-loaded="true"
                    />
                  </li>
                  <li>
                    <img
                      class="loadimg"
                      src="/img/development/icons8-swift-48.png"
                      data-src="https://srvinfotech.com/public/img/partners/nasscom.svg"
                      alt="NASSCOM"
                      data-loaded="true"
                    />
                  </li>

                  <li>
                    <img
                      class="loadimg"
                      src="/img/development/icons8-html-48.png"
                      data-src="https://srvinfotech.com/public/img/partners/duns.png"
                      alt="DUNS"
                      data-loaded="true"
                    />
                  </li>
                  <li>
                    <img
                      class="loadimg"
                      src="/img/development/icons8-javascript-48.png"
                      data-src="https://srvinfotech.com/public/img/partners/clutch.png"
                      alt="Clutch"
                      data-loaded="true"
                    />
                  </li>
                  <li>
                    <img
                      class="loadimg"
                      src="/img/development/icons8-css-48.png"
                      data-src="https://srvinfotech.com/public/img/partners/nasscom.svg"
                      alt="NASSCOM"
                      data-loaded="true"
                    />
                  </li>

                  <li>
                    <img
                      class="loadimg"
                      src="/img/development/icons8-angular-48.png"
                      data-src="https://srvinfotech.com/public/img/partners/g-cloud.png"
                      alt="Google Cloud"
                      data-loaded="true"
                    />
                  </li>
                </ul>
              </div>
            </Row>
          </Container>
        </section>
      </div>
    </div>
  );
}

export default Softdevelopment;
