import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="container py-5">
      
      <footer class="bg-body-tertiary text-center text-lg-start">
        <div class="text-center p-3">
          Copyright © 2024 Dhanwis TechInfo Solutions All rights reserved.
          <a
            style={{ color: "rgb(207, 207, 207)" }}
            className="p-2  icon"
            href="https://www.facebook.com/dhanwisinfo"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-facebook-f"></i>
          </a>
          <a
            style={{ color: "rgb(207, 207, 207)" }}
            className="p-2  icon"
            aria-label="Whatsapp"
            href="https://api.whatsapp.com/send?phone=8086487219"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-whatsapp"></i>
          </a>
          <a
            style={{ color: "rgb(207, 207, 207)" }}
            className="p-2  icon"
            aria-label="LinkedIn"
            href="https://in.linkedin.com/in/dhanwis-techinfo-solutions-9505622a7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a
            style={{ color: "rgb(207, 207, 207)" }}
            className="p-2  icon"
            aria-label="Instagram"
            href="https://www.instagram.com/dhanwistechinfosolutions/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-instagram"></i>
          </a>
        </div>
      </footer>
    </div>
  );
}



 
