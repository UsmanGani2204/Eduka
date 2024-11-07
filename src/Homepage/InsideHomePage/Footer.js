import React, { useEffect, useContext, useRef }from "react";
import { context } from "../../App";
import "./Footer.css";
import logo from "../../Images/Image 578.png";

function Footer() {
  const dynamicheight = useRef();

  const { hf } = useContext(context);
  useEffect(() => {
    if (dynamicheight.current) {
      hf(dynamicheight.current.scrollHeight);
    }
  }, []);
  return (
    <>
      <footer className="footer" ref={dynamicheight}>
        <img src={logo} />
        <aside>
          <h2>Quick Links</h2>
          <a href="/about">About Us</a>
          {/* <a href="">Admissions</a> */}
          <a href="/enquiry">Enquiry Form</a>
          <a href="/gallery">Gallery</a>
        </aside>
        <aside>
          <h2>Contact Us</h2>
          <h4>Address</h4>
          <blockquote>
            <i class="fa-solid fa-address-card"></i>
            <b>S.No.16/1B Inamnagar Kondhwa Budruk Pune - 411048</b>
          </blockquote>
          <h4>Phone</h4>
          <blockquote>
            <i class="fa-solid fa-phone"></i>
            <b>+91 9226874468</b>
          </blockquote>
          <h4>Email</h4>

          <blockquote
            onClick={() => {
              window.location.href = "mailto:eduka246@gmail.com";
            }}
          >
            <i class="fa-solid fa-envelope"></i>
            <b>eduka246@gmail.com</b>
          </blockquote>
          <h4>WhatsApp</h4>
          <blockquote
            onClick={() => {
              window.location.href = "whatsapp://send?phone=919226896399";
            }}
          >
            <i class="fa-brands fa-whatsapp"></i>
            <b>+91 9226896399</b>
          </blockquote>
          <h4>Instagram</h4>
          <blockquote
            onClick={() => {
              window.location.href =
                "https://www.instagram.com/eduka_national_school/";
            }}
          >
            <i class="fa-brands fa-instagram"></i>
            <b>@eduka_national_school</b>
          </blockquote>
        </aside>
      </footer>
      <div className="belowfooter">
        <h4>&copy; 2024 Eduka National School. All rights reserved.</h4>
      </div>
    </>
  );
}

export default Footer;
