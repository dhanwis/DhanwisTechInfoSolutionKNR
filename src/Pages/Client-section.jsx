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
                        Our <span style={{ color: "#ffcc33" }}>Happy Clients</span>
                        </h2>
                        <p className="hddesc center" style={{marginTop:"10px"}}>
                            We collaborate closely with a broad spectrum of clients from various
                            industries and places.
                        </p>
                    </div>

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
                            <img src="/img/clients/Ashraya Medicals - Google Chrome 09-01-2024 14_10_52.png" alt="Client 2" />
                        </div>
                        <div class="client-item">
                            <img src="/img/clients/Cinema News Agency _ Exclusive Cinema Magazine in Malayalam and 18 more pages - Profile 1 - Microsoft​ Edge 10-01-2024 14_21_52.png" alt="Client 3" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}