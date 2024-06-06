import React from 'react'

import './Slider.css'
import Marquee from 'react-fast-marquee'

function Slider2() {

  return (
    <div>
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




      <Marquee pauseOnHover={true} style={{ marginTop: '3em' }}>
        <img
          class="loadimg"
          style={{ marginRight: '100px' }}
          src="/img/development/icons8-css-48.png"
          data-src="https://srvinfotech.com/public/img/partners/nasscom.svg"
          alt="NASSCOM"
          data-loaded="true"
        />

        <img
          class="loadimg"
          style={{ marginRight: '100px' }}
          src="/img/development/icons8-javascript-48.png"
          data-src="https://srvinfotech.com/public/img/partners/clutch.png"
          alt="Clutch"
          data-loaded="true"
        />

        <img
          class="loadimg"
          style={{ marginRight: '100px', width: '80px', height: "auto" }}
          src="/img/development/firebase.png"
          data-src="https://srvinfotech.com/public/img/partners/clutch.png"
          alt="Clutch"
          data-loaded="true"
        />

        <img
          class="loadimg"
          style={{ marginRight: '100px' }}
          src="/img/development/icons8-html-48.png"
          data-src="https://srvinfotech.com/public/img/partners/duns.png"
          alt="DUNS"
          data-loaded="true"
        />

        <img
          class="loadimg"
          style={{ marginRight: '100px' }}
          src="/img/development/icons8-c++-48.png"
          data-src="https://srvinfotech.com/public/img/partners/clutch.png"
          alt="Clutch"
          data-loaded="true"
        />

        <img
          class="loadimg"
          style={{ marginRight: '100px' }}
          src="/img/development/icons8-python-48.png"
          data-src="https://srvinfotech.com/public/img/partners/duns.png"
          alt="DUNS"
          data-loaded="true"
        />

        <img
          class="loadimg"
          style={{ marginRight: '100px' }}
          src="/img/development/icons8-flutter-48.png"
          data-src="https://srvinfotech.com/public/img/partners/clutch.png"
          alt="Clutch"
          data-loaded="true"
        />


        <img
          class="loadimg"
          style={{ marginRight: '100px' }}
          src="/img/development/icons8-nodejs-48.png"
          data-src="https://srvinfotech.com/public/img/partners/nasscom.svg"
          alt="NASSCOM"
          data-loaded="true"
        />
        <img
          class="loadimg"
          style={{ marginRight: '100px' }}
          src="/img/development/icons8-kotlin-48.png"
          data-src="https://srvinfotech.com/public/img/partners/duns.png"
          alt="DUNS"
          data-loaded="true"
        />

        <img
          class="loadimg"
          style={{ marginRight: '100px' }}
          src="/img/development/icons8-react-100.png"
          data-src="https://srvinfotech.com/public/img/partners/g-cloud.png"
          alt="Google Cloud"
          data-loaded="true"
        />

      </Marquee>
    </div>
  )
}

export default Slider2