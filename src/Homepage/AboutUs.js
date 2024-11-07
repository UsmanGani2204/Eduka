import React from "react";
import logo from "../Images/Image 578.png";
import Navbar from "./InsideHomePage/Navbar";
import "./AboutUs.css";

function AboutUs() {
  return (
    <>
      <Navbar />
      <section className="aboutUsMain">
        <div>
          <ul>
            <img src={logo} />
            <li>
              {" "}
              Welcome to Eduka National School, Pune – a vibrant center for
              learning that embraces the joy, curiosity, and potential of every
              child. At Eduka National, we are more than just a school; we are a
              community dedicated to inspiring young minds and fostering an
              environment where students thrive academically, socially, and
              emotionally.
            </li>
            <li>
              Founded with a vision to provide quality education with a modern
              approach, Eduka National School combines rigorous academic
              standards with holistic growth. Our experienced faculty brings
              learning to life through engaging, innovative teaching methods
              tailored to nurture each child's unique talents and abilities. We
              believe that a balanced education extends beyond the classroom,
              incorporating sports, arts, and life skills to ensure a
              well-rounded development.
            </li>
            <li>
              Our Vision To empower children to become lifelong learners,
              critical thinkers, and compassionate leaders who contribute
              positively to society. We aim to cultivate a nurturing environment
              where students feel confident to explore, experiment, and excel.
            </li>
            <li>
              Our Mission We are committed to:
              <ol>
                <li>
                  Delivering a balanced curriculum that integrates academic
                  rigor with creativity.
                </li>
                <li>
                  Encouraging a culture of respect, inclusivity, and
                  collaboration.
                </li>
                <li>
                  Developing each student’s social, emotional, and physical
                  well-being alongside their academic achievements.
                </li>
                <li>
                  Providing a safe, positive, and stimulating learning
                  environment where children feel valued and motivated.
                </li>
              </ol>
            </li>
            <li>
              Why Choose Eduka National School?
              <ol>
                <li>
                  Experienced and Caring Educators: Our teachers are dedicated
                  to bringing out the best in each student through personalized
                  attention and innovative teaching methods.
                </li>
                <li>
                  Holistic Learning Environment: From academics to
                  extracurricular activities, we offer a comprehensive education
                  that helps children develop into well-rounded individuals.
                </li>
                <li>
                  Modern Infrastructure: Our campus is equipped with
                  state-of-the-art facilities, including modern classrooms,
                  science and computer labs, sports grounds, and creative
                  spaces, designed to enhance learning and discovery.
                </li>
                <li>
                  Focus on Values: At Eduka National, we emphasize
                  character-building and instill values of empathy,
                  responsibility, and respect in every child.
                </li>
              </ol>
            </li>
            <li>
              Eduka National School is a place where every child is encouraged
              to dream big and work toward their aspirations. We welcome you to
              join our family and be a part of our journey to inspire and
              educate the leaders of tomorrow. Join Us in Shaping the Future We
              invite you to visit our campus, meet our faculty, and experience
              our unique approach to education firsthand. Discover why Eduka
              National School is the ideal choice for your child's future.
            </li>
            <li>
              Our mission is to empower dreams, to unleash knowledge, and to
              achieve excellence. We are committed to provide a nurturing and
              innovative learning environment where each student is inspired to
              dream big and is equipped with the knowledge and skills to turn
              those dreams into a reality.
            </li>
            <li>
              Through a dynamic educatiort system, we strive to cultivate a
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
        </div>
      </section>
    </>
  );
}

export default AboutUs;
