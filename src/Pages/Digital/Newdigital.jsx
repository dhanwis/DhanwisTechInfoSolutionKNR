import "./digital.css";
import { Container, Row, Col } from "react-bootstrap-v5";

function DigitalMarketing() {
  return (
    <div className="container">
      <div className="row">
        <Col>
          <div style={{ width: "100%" }}>
            <div className="py-5 ld-fancy-heading ld_fancy_heading_6585270055965">
              {" "}
              <h1 className="d-sm-none d-lg-block ld-fh-element lqd-highlight-underline lqd-highlight-grow-left text-decoration-default">
                {" "}
                Digital Marketing
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
                      <h1>Digital Marketing</h1>
                    </div>

                    <div>
                      <p className="mt-3">
                        Digital marketing refers to the use of electronic
                        channels such as the internet, mobile devices, social
                        media, search engines, email, and other digital
                        platforms to promote products or services through
                        various strategies and techniques.Creating and
                        distributing valuable, relevant, and consistent content
                        to attract and engage a targeted audience. Content can
                        take various forms, including blog posts, videos,
                        infographics, ebooks, podcasts, and more.
                      </p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <img
                      src="/img/development/dm2.jpg"
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
                      src="/img/development/img4.jpg"
                      alt=""
                      width={"500px"}
                      height={"auto"}
                    />
                  </div>

                  <div className="mt-4 ms-lg-5">
                    <div>
                      <h1>Search Engine Optimization(SEO)</h1>
                    </div>

                    <div>
                      <p className="mt-3">
                        SEO Stands for Search Engine Optimization.Which is the
                        practice of increasing the quantity and quality of
                        traffic to your website through organic Search Engine
                        results. This involves enhancing your website and its
                        content to achieve higher rankings in search engine
                        results pages (SERPs) for relevant keywords. This can
                        help to increase the amount of organic traffic to your
                        website, without the need for paid advertising.
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

export default DigitalMarketing;
