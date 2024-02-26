import React from "react";
import "./Aboutussty.css";
import about from "./images/about.png";

export default function Aboutus(props) {
  return (
    <div className="tfix">
      <div
        className={` my-5 ${props.mode === "dark" ? "white-text" : ""} `}
      >
        <div className="container my-5">
          <h2 className="text-center mb-4">About Us</h2>
          <div className="row">
          <div className="col-md-6 mb-4 d-flex justify-content-center align-items-center">
              <img src={about} alt="About Us" className="img-fluid" />
            </div>
            <div className="col-md-6">
              <h3 className="text-center">Who We Are</h3>
              <p className="text-center">
                We are Insight Consultancy, a trusted provider of business
                consulting services and a team of experienced professionals who
                are passionate about helping businesses thrive in today's dynamic
                and competitive environment.
              </p>

              <h3 className="text-center">What We Do</h3>
              <p className="text-center">
                We offer a wide range of services, including management
                consulting, financial consulting, technology consulting, human
                resources consulting, marketing and sales consulting, legal
                consulting, and environmental consulting. Our team of experts is
                dedicated to delivering results that matter and helping our
                clients achieve their business objectives.
              </p>

              <h3 className="text-center">Why Choose Us</h3>
              <p className="text-center">
                Insight Consultancy stands out as a leading provider of business
                consulting services due to our commitment to delivering tailored
                solutions that drive tangible results. Our experienced team of
                professionals brings a wealth of industry knowledge and expertise
                to the table, ensuring that each client receives personalized
                attention and support. We understand that every business is
                unique, which is why we take a client-centric approach, focusing
                on your specific needs and goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

