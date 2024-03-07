import React from "react";
import CardItem from "./CardItem.js";
import "../CSS/Cards.css";
// import Img1 from '../../Images/Img1.jpg';
import Img2 from '../../Images/Img2.jpg';
import Img3 from '../../Images/Img3.jpg';
import Img4 from '../../Images/Img4.jpg';
import Img5 from '../../Images/Img5.jpg';
import Img6 from '../../Images/Img6.jpg';

function Cards() {
  return (
    <div className="cards">
      <h1>Check Out Some of our Services</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              className="card-text"
              src={Img3}
              text="Kenbra Limited is owned and managed by Directors consisting of two founding directors who are responsible for overall policy direction of the company."
              label="Governance Audit"
              // path="/services"
            />
            <CardItem
              src={Img2}
              text="Our expert team meticulously assesses your HR practices to ensure compliance, efficiency, and alignment with your organizational goals."
              label="HR Audit"
              // path="/services"
            />
          </ul>

          <ul className="cards__items">
            <CardItem
              src={Img4}
              text="Our dedicated team collaborates closely with your organization to craft strategic initiatives that drive growth and success. "
              label="Strategic Planning, Review and Development"
              // path="/services"
            />
            <CardItem
              src={Img6}
              text="Our seasoned consultants specialize in cultivating positive relationships between employers and employees, navigating complex issues with empathy and expertise."
              label="Employee Relations Services"
              // path="/services"
            />
            <CardItem
              src={Img5}
              text="Our experienced team meticulously evaluates job roles, skill sets, and market trends to develop a comprehensive grading and salary structure tailored to your organization's needs."
              label="Job Evaluation & Grading, salary structure Development"
              // path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
