import React, { useEffect, useRef, useState } from "react";
import "./Carousal.css";
import image1 from "../../Images/Admission_Banner.png";
import image2 from "../../Images/WhatsApp Image 2024-10-27 at 1.13.46 PM (1).jpeg";
import image3 from "../../Images/WhatsApp Image 2024-10-27 at 1.14.41 PM.jpeg";
import image4 from "../../Images/WhatsApp Image 2024-10-27 at 1.15.49 PM.jpeg";

function Carousal() {
  const [nextimage, setnextimage] = useState(1);
  const carousalref = useRef();
  const imagesref = useRef([]);

  function slidenextimage() {
    if (carousalref.current && nextimage < imagesref.current.length) {
      carousalref.current.style.transform = `translateX(-${
        carousalref.current.clientWidth * nextimage
      }px)`;
      carousalref.current.style.transition = "transform 1s ease";
      setnextimage(nextimage + 1);
    } else {
      if (carousalref.current) {
        carousalref.current.style.transform = "translateX(0px)";
        carousalref.current.style.transition = "transform 0s";
        setnextimage(1);
      }
    }
  }
  useEffect(() => {
    const interval = setInterval(slidenextimage, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [nextimage]);
  function slidepreviosimage() {
    if (carousalref.current && nextimage > 1) {
      carousalref.current.style.transform = `translateX(-${
        carousalref.current.clientWidth * (nextimage - 2)
      }px)`;
      carousalref.current.style.transition = "transform 1s ease";
      setnextimage(nextimage - 1);
    }
  }
  return (
    <div className="carousal">
      <div>
        <figure ref={carousalref}>
          <img src={image1} ref={(el) => (imagesref.current[0] = el)} />
          <img src={image2} ref={(el) => (imagesref.current[1] = el)} />

          <img src={image3} ref={(el) => (imagesref.current[2] = el)} />
          <img src={image4} ref={(el) => (imagesref.current[3] = el)} />
        </figure>
      </div>
      <button style={{ left: "5%" }} onClick={slidepreviosimage}>
        <i class="fa-solid fa-angle-left"></i>
      </button>
      <button style={{ right: "5%" }} onClick={slidenextimage}>
        <i class="fa-solid fa-angle-right"></i>
      </button>
    </div>
  );
}

export default Carousal;
