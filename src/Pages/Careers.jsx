import "./Careers.css";

export default function Careers() {
  return (
    <div>
      <section className="career-section d-flex">
        <div className="container align-self-center text-white text-center">
          <h1
            className="mt-5 mb-4 animated fadeInUp visible"
            data-animation="fadeInUp"
          >
            Dhanwis Techinfo Solutions
          </h1>
          <br />
          <p>
            Location : TKH Building, Opp Jawahar Library, Yogasala Road, Kannur
            - 670001 <br /> Phone : +91 8075487219 | Email : info@dhanwis.com
          </p>
          <br />
          <p
            style={{
              color: "greenyellow",
              fontWeight: "400",
              fontSize: "1.3rem",
            }}
          >
            {" "}
            Launching Soon....
          </p>
        </div>
      </section>
    </div>
  );
}
