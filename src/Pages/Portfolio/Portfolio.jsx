import React from 'react'
import './Portfolio.css'

export default function Portfolio() {
    return (
        <div>
            <header style={{ background: '#333', textAlign: 'center', padding: '20px', color: 'wheat' }}>
                <h1 style={{letterSpacing:'2px'}}>Beautiful touch By Dhanwis</h1>
            </header>

            <section class="portfolio">

                <div class="project">
                    <img src="project1.jpg" alt="Project 1" />
                    <h2>Project 1</h2>
                    <p>Description of Project 1.</p>
                    <a href="#">View Project</a>
                </div>


                <div class="project">
                    <img src="project2.jpg" alt="Project 2" />
                    <h2>Project 2</h2>
                    <p>Description of Project 2.</p>
                    <a href="#">View Project</a>
                </div>

            </section>
        </div>
    )
}
