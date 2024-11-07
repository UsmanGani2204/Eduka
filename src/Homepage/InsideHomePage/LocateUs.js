import React ,{ useContext, useEffect, useRef }from "react";
import { context } from "../../App";
import "./LocateUs.css";

function LocateUs() {
  const locateheight = useRef();
  const { hl } = useContext(context);
  useEffect(() => {
    if (locateheight.current) {
      hl(locateheight.current.clientHeight);
    }
  }, []);
  return (
    <>
    <section style={{ width: "100%", padding: "5rem 0" }}>
      <div className="locateUs" ref={locateheight}>
        <h1>Locate Us</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.4378239907182!2d73.88572737593887!3d18.463817082618764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eb007ca96a5b%3A0xd9392819ad6a22da!2sEduka%20National%20School!5e0!3m2!1sen!2sin!4v1730293533785!5m2!1sen!2sin"
          style={{ border: "2px dashed darkblue" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      </section>
    </>
  );
}

export default LocateUs;
