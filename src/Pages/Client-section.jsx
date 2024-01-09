import React from 'react'
import './client-section.css'


// need to add our clients 
export default function Client() {
    return (
        <div>
            <div className="container-fluid cmpad py-5">
                <div className="row">
                    <div className="col-12">
                        <h2 className="mainhead center" style={{ color: 'white' }}>
                            Some of Our <span style={{ color: "#ffcc33" }}>Happy Clients</span>
                        </h2>
                        <p className="hddesc center">
                            We collaborate closely with a broad spectrum of clients from various
                            industries and places.
                        </p>
                    </div>

                    {/* <div class="col-12">
                        <ul class="partnerslist mt-5 d-flex">
                            <li><img class="loadimg" style={{ width: '200px', marginLeft: '10px' }} src="/img/clients/Ashraya Medicals - Google Chrome 09-01-2024 14_10_23.png" data-src="https://srvinfotech.com/public/img/partners/g-cloud.png" alt="Google Cloud" data-loaded="true" /></li>
                            <li><img class="loadimg" style={{ width: '200px', marginLeft: '10px' }} src="/img/clients/Ashraya Medicals - Google Chrome 09-01-2024 14_10_38.png" data-src="https://srvinfotech.com/public/img/partners/duns.png" alt="DUNS" data-loaded="true" /></li>
                            <li><img class="loadimg" style={{ width: '200px', marginLeft: '10px' }} src="/img/clients/Ashraya Medicals - Google Chrome 09-01-2024 14_10_52.png" data-src="https://srvinfotech.com/public/img/partners/clutch.png" alt="Clutch" data-loaded="true" /></li>
                            <li><img class="loadimg" style={{ width: '200px', marginLeft: '10px' }} src="/img/clients/Ashraya Medicals - Google Chrome 09-01-2024 14_11_18.png" data-src="https://srvinfotech.com/public/img/partners/duns.png" alt="DUNS" data-loaded="true" /></li>

                            <li><img class="loadimg" style={{ width: '200px', marginLeft: '10px' }} src="/img/clients/Ashraya Medicals - Google Chrome 09-01-2024 14_11_12.png" data-src="https://srvinfotech.com/public/img/partners/nasscom.svg" alt="NASSCOM" data-loaded="true" /></li>
                            <li><img class="loadimg" style={{ width: '200px', marginLeft: '10px' }} src="/img/clients/Ashraya Medicals - Google Chrome 09-01-2024 14_11_18.png" data-src="https://srvinfotech.com/public/img/partners/duns.png" alt="DUNS" data-loaded="true" /></li>
                            <li><img class="loadimg" style={{ width: '200px', marginLeft: '10px' }}  data-src="https://srvinfotech.com/public/img/partners/clutch.png" alt="Clutch" data-loaded="true" /></li>
                            <li><img class="loadimg" style={{ width: '200px', marginLeft: '10px' }} src="/img/clients/Ashraya Medicals - Google Chrome 09-01-2024 14_11_26.png" data-src="https://srvinfotech.com/public/img/partners/nasscom.svg" alt="NASSCOM" data-loaded="true" /></li>
                        </ul>

                    </div> */}

                    <div class="clients-container">
                        <div class="client-item">
                            <img src="/img/clients/Ashraya Medicals - Google Chrome 09-01-2024 14_11_26.png" alt="Client 1" />
                        </div>
                        <div class="client-item">
                            <img src="/img/clients/Ashraya Medicals - Google Chrome 09-01-2024 14_10_23.png" alt="Client 2" />
                        </div>
                        <div class="client-item">
                            <img src="/img/clients/GOLDMAN INTERIORS LLP _ BEST BUILDERS IN KERALA AND MIDDLE EAST - Google Chrome 09-01-2024 14_10_13.png" alt="Client 3" />
                        </div>
                    </div>



                    <div class="clients-container">
                        <div class="client-item">
                            <img src="/img/clients/Ashraya Medicals - Google Chrome 09-01-2024 14_11_12.png" alt="Client 1" />
                        </div>
                        <div class="client-item">
                            <img  src="/img/clients/Ashraya Medicals - Google Chrome 09-01-2024 14_10_52.png" alt="Client 2" />
                        </div>
                        <div class="client-item">
                            <img  src="/img/clients/Ashraya Medicals - Google Chrome 09-01-2024 14_10_38.png" alt="Client 3" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


{/* second line */ }

//  <div class="client-item">
//  <img src="/img/clients/Ashraya Medicals - Google Chrome 09-01-2024 14_11_12.png" alt="Client 1" />
// </div>
// <div class="client-item">
//  <img src="/img/clients/Ashraya Medicals - Google Chrome 09-01-2024 14_10_38.png" data-src="https://srvinfotech.com/public/img/partners/duns.png" alt="Client 2" />
// </div>
// <div class="client-item">
//  <img src="/img/clients/Ashraya Medicals - Google Chrome 09-01-2024 14_11_26.png" alt="Client 3" />
// </div>