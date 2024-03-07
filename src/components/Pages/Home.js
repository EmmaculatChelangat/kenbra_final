import React, {useState} from 'react';
import TypeWriter from 'typewriter-effect';
import '../CSS/Home.css'
import Cards from '../Features/Cards';
import Footer from '../Footer';

function Home() {
    const [state] = useState({
        title: "Hi👋,",
        titleTwo: "Welcome to Kenbra Limited research and consulting services ",
        titleThree: "We Offer Services Like:",
        // image: "/images/mh.png",
});
  return (
    <>
      <div className='home'>
        <div className="home-intro">
          <h2>
            <div className="title">{state.title}</div>
            <div className="titleTwo">{state.titleTwo}</div>
            <div className="titleThree">{state.titleThree}</div>
          </h2>
          <div className="text">
            <TypeWriter
              options={{
                autoStart: true,
                loop: true,
                delay: 40,
                strings: [
                  "Governance Audit.",
                  "HR Audit.",
                  "Strategic Planning, Review and Development.",
                  "Employee Relations Services.",
                  "Job Evaluation &Job Grading, salary structure Development",
                  "Organization Development",
                  "Organizational Restructuring",
                  "Review of Salary and Benefits survey",
                  "Business and operational Reviews",
                  "Training & Development",
                  "Training Needs Assessment"
                ],
              }}
            />
            </div>
        </div>
        </div>

        <Cards />
        <Footer />
    </>
  );
};

export default Home
