import React from 'react'
import {Row, Col} from 'react-bootstrap-v5'
import './Footer.css'


export default function Footer() {
  return (
    <div className='container '>
         <Row className='footer pt-3'>
          <Col className='col-10 footer-content text-center'>
            Copyright © 2024 Dhanwise TechInfo Solutions All rights reserved. 
        </Col>
        <Col className='col-2 footer-icon iconcol'>
          <a style={{color:'#ffcc33'}} className='p-2 icon' href="#!"><i class="fa-brands fa-facebook-f"></i></a>  
          <a style={{color:'#ffcc33'}} className='p-2 icon' href="#!"><i class="fa-brands fa-whatsapp"></i></a> 
          <a style={{color:'#ffcc33'}} className='p-2 icon'href="#!"><i class="fab fa-linkedin-in"></i></a>
          <a style={{color:'#ffcc33'}} className='p-2 icon'href="#!"><i class="fa-brands fa-instagram"></i></a> 
        </Col>
        </Row>
    
    </div>
  )
}
