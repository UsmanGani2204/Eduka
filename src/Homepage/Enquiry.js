import React, { useRef, useState } from "react";
import "./Enquiry.css";
import Navbar from "./InsideHomePage/Navbar";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Enquiry() {
  const [formdata, setformdata] = useState({
    name: "",
    phone: "",
    gender: "",
    description: "",
  });

  const [loading, setloading] = useState(false);
  const [isphonenumberinvalid, setphonenumberinvalid] = useState(false);

  const formref = useRef();

  function handlesubmit(e) {
    e.preventDefault();

    if (formdata.phone.length < 10) {
      setphonenumberinvalid(true);
    } else {
      setloading(true);
      axios
        .post("https://edukanationalschool.in/sendmail/sendmail.php", formdata)
        .then((res) => {
          setloading(false);
          toast.success("Submitted Successfully", {
            position: "bottom-center",
          });

          formref.current.reset();
        })
        .catch((err) => {
          console.log(err);
          setloading(false);
          toast.error("Failed to Submit", {
            position: "bottom-center",
          });
        });
    }
  }
  return (
    <>
      <ToastContainer />
      <Navbar />
      <section className="enquiry">
        <h1>Student Enquiry Form</h1>
        <form onSubmit={handlesubmit} ref={formref}>
          {isphonenumberinvalid && (
            <blockquote
              style={{
                width: "80%",
                margin: "0 auto",
                backgroundColor: "rgba(255,0,0,0.4)",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0.5rem",
              }}
            >
              <b>Phone Number Should be 10 digits</b>
              <i
                class="fa-solid fa-xmark"
                style={{ cursor: "pointer", fontSize: "1.5rem" }}
                onClick={() => setphonenumberinvalid(false)}
              ></i>
            </blockquote>
          )}
          <blockquote>
            <label>
              Name of Student <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              placeholder="Enter Full Name"
              onChange={(e) =>
                setformdata({ ...formdata, name: e.target.value })
              }
              onInput={(e) => {
                const input = e.target;
                const value = input.value;
                input.value = value.replace(/[^a-zA-Z\s]/g, "");
              }}
              required
            />
          </blockquote>
          <aside>
            <blockquote>
              <label>
                Phone Number <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="number"
                placeholder="Enter Phone Number"
                onChange={(e) =>
                  setformdata({ ...formdata, phone: "+91 " + e.target.value })
                }
                onInput={(e) => {
                  const input = e.target;
                  let value = input.value;
                  value = value.replace(/[^0-9]/g, "");
                  if (value.length > 10) {
                    value = value.slice(0, 10);
                  }

                  input.value = value;
                }}
                required
              />
            </blockquote>
            <blockquote>
              <label>
                Select Gender <span style={{ color: "red" }}>*</span>
              </label>
              <select
                onChange={(e) => {
                  setformdata({ ...formdata, gender: e.target.value });
                }}
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </select>
            </blockquote>
          </aside>

          <blockquote>
            <label>
              Description <span style={{ color: "red" }}>*</span>
            </label>
            <textarea
              rows={10}
              placeholder="Enter Query Description"
              onChange={(e) =>
                setformdata({ ...formdata, description: e.target.value })
              }
              required
            />
          </blockquote>

          <button type="submit">
            {loading ? (
              <i
                class="fa-solid fa-spinner fa-spin"
                style={{ fontSize: "1.5rem" }}
              ></i>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </section>
    </>
  );
}

export default Enquiry;
