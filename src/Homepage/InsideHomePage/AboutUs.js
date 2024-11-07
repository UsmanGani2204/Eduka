import React, { useEffect, useRef } from "react";
import "./AboutUs.css";
import motto from "../../Images/Image 573.png";
import { useNavigate } from "react-router-dom";

function AboutUs() {
  const nav = useNavigate();
  const aboutusref = useRef();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 500) {
        if (aboutusref.current) {
          aboutusref.current.style.transform = "translateX(0px)";
          aboutusref.current.style.transition = "transform 1s ease";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
    <section style = {{width: '100%' , overflow:'hidden'}}>
      <section className="aboutUs" ref={aboutusref}>
        <aside>
          <h1>About Eduka</h1>
          <ul>
            <li>
              Our mission is to empower dreams, to unleash knowledge, and to
              achieve excellence. We are committed to provide a nurturing and
              innovative learning environment where each student is inspired to
              dream big and is equipped with the knowledge and skills to turn
              those dreams into a reality.
            </li>
            <li>
              Through a dynamic education system, we strive to cultivate a
              culture of excellence, fostering a love for learning and
              empowering our students to become responsible and compassionate
              global citizens.
            </li>
            <li>
              Together, we are dedicated towards creating a global community
              that values curiosity, embraces diversity, and celebrates the
              journey of lifelong learning.
            </li>
          </ul>
          <button onClick={() => nav("/about")}>See More</button>
        </aside>
        <aside>
          <h1>Our Motto</h1>
          <dl>
            <dd>
              <b>E</b>mpowering
            </dd>
            <dd>
              &nbsp;&nbsp;&nbsp;<b>D</b>reams
            </dd>
            <dd>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>U</b>nleashing
            </dd>
            <dd>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>K</b>
              nowledge and{" "}
            </dd>
            <dd>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <b>A</b>chieving Excellence
            </dd>
          </dl>
        </aside>
      </section>
      </section>
    </>
  );
}

export default AboutUs;
