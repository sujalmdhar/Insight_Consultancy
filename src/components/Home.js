import React from "react";
import "./homest.css";
import organizational from './images/organization.png';
import strategy from "./images/strategy.png";
import research from "./images/research.png";


export default function Home(props) {
  return (
    <div
      className={`container ${props.mode === "dark" ? "white-text" : ""} tfix`}
    >
      <h1 className="my-5">Welcome to Insight Consultancy!</h1>
      <p>
      Insight Consultancy is a leading consulting firm that specializes in providing expert guidance to businesses and organizations seeking to improve their operations, increase efficiency, and achieve strategic goals.
      </p>
      <p>
      With a team of experienced consultants, Insight Consultancy offers a wide range of services, including strategy development, market research, organizational design, and process improvement.
At Insight Consultancy, we believe in working closely with our clients to fully understand their unique needs and challenges.
      </p>
      <p> 
        Contact us today to learn more about our services and how we can support your organization's success.
      </p>

      <div id="heading1" className="my-5">
        <h2>Our Services</h2>
        <i className="border"></i>
      </div>

      <div className="container-fluid">
        <div className="row my-4">
          <div className="col-md-6">
            <img src={organizational} alt="" className="imgadj" />
          </div>
          <div className="col-md-6">
            <div className="service-desc">
              <h3>Organizational Design</h3>
              <p>
              We help clients optimize their organizational structures, processes, and systems to improve efficiency, productivity, and overall performance. This includes analyzing workflows, identifying areas for improvement, and implementing changes to drive results.
              </p>
            </div>
          </div>
        </div>
        <div className="row my-4">
          <div className="col-md-6 order-md-2">
            <img src={strategy} alt="" className="imgadj" />
          </div>
          <div className="col-md-6 order-md-1">
            <div className="service-desc">
              <h3>Strategy Development</h3>
              <p>
              We work with clients to develop a comprehensive strategy that aligns with their business goals and objectives. This includes conducting market research, identifying potential growth opportunities, and developing a roadmap for success.
              </p>
            </div>
          </div>
        </div>
        <div className="row my-4">
          <div className="col-md-6">
            <img src={research} alt="" className="imgadj" />
          </div>
          <div className="col-md-6">
            <div className="service-desc">
              <h3>Market Research</h3>
              <p>
              We conduct research and analysis to help clients better understand their target markets, including customer behavior, preferences, and needs. This includes developing customer surveys, conducting focus groups, and analyzing data to inform business decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
