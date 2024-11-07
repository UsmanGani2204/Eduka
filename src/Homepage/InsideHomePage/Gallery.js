import React, { useEffect, useRef } from "react";
import "./Gallery.css";
import { useNavigate } from "react-router-dom";

function Gallery() {
  const nav = useNavigate();
  const galleryref = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 1500) {
        if (galleryref.current) {
          galleryref.current.style.transform = "translateX(0px)";
          galleryref.current.style.transition = "transform 1s ease";
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
      <section className="gallery">
        <h1>Gallery</h1>
        <div ref={galleryref}>
          <img src="images/blue_day/WhatsApp Image 2024-10-27 at 1.14.22 PM (1).jpeg" />
          <img src="images/green_day/WhatsApp Image 2024-10-27 at 1.14.42 PM.jpeg" />
          <img src="images/independence_day_celebration/WhatsApp Image 2024-10-27 at 4.46.15 PM (1).jpeg" />
          <img src="images/red_day/WhatsApp Image 2024-10-27 at 1.13.46 PM.jpeg" />
          <img src="images/yellow_day/WhatsApp Image 2024-10-27 at 1.15.44 PM (1).jpeg" />
          <img src="images/green_day/WhatsApp Image 2024-10-27 at 1.14.43 PM (1).jpeg" />
        </div>
        <button onClick={() => nav("/gallery")}>See More</button>
      </section>
    </>
  );
}

export default Gallery;
