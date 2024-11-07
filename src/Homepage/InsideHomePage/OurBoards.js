import React, { useEffect, useRef } from "react";
import "./OurBoards.css";
import card1 from "../../Images/ncf.png";
import card2 from "../../Images/Image 576.png";
import card3 from "../../Images/Image 577.png";

function OurBoards() {
  const cardref = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 1000) {
        if (cardref.current) {
          cardref.current.style.transform = "translateX(0px)";
          cardref.current.style.transition = "transform 1s ease";
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
      <section className="ourboards">
        <h1>Our Syllabus</h1>
        <div ref={cardref}>
          <aside>
            <img src={card1} />
            <h3>NEP NCF-FS 2022 compliant</h3>
          </aside>
          <aside>
            <h3 style={{fontWeight: 1000}}>Academic Excellence </h3>
            <ul>
              <li>
                Unlock Your Child's Full Potential at Eduka Schools Experience
                academic excellence in a personalized learning environment
                tailored to your child's unique needs and strengths. Our bespoke
                learning programs celebrate individual greatness, empowering
                students to reach new heights and achieve their dreams.
              </li>
              <li>
                At Eduka Schools, we believe every child deserves to thrive.
                Join us and discover a learning journey
              </li>
            </ul>
          </aside>
          <aside>
            <h3 style={{fontWeight: 1000}}>Story time </h3>
            <ul>
              <li>
                Storytime ignites imagination and fosters a love for reading in
                young minds through enchanting narratives, vibrant
                illustrations, and simple, clear language. This captivating
                experience sparks curiosity, inspires creativity, and nurtures
                cognitive growth, unleashing a lifelong passion for reading and
                exploration.
              </li>
              <li>
                By bringing tales to life, Storytime creates a magical journey
                where words inspire wonder, imagination knows no bounds, and the
                joy of reading becomes a lifelong treasure.
              </li>
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}

export default OurBoards;
