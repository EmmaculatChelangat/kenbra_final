import React, { useState } from 'react'
import '../CSS/Services.css'
// import Footer from '../Footer'



function Services() {

  const [cards] = useState([
    {
      title: 'Training & Development',
      text:  `Invest in your team's success with our dynamic Training & Development programs.
      From skill enhancement to leadership development, we tailor our training solutions to empower your workforce and drive organizational excellence.`
    },
    {
      title: 'Business and Operational Reviews',
      text:  `Unlock the full potential of your business with our meticulous Business and Operational Reviews. 
      Our expert team conducts comprehensive assessments to identify strengths, weaknesses, and opportunities, paving the way for enhanced efficiency and sustainable growth.`
    },
    {
      title: 'Policies & Procedures Formulation and Development',
      text:  `Build a solid foundation for your organization with our Policies & Procedures Formulation and Development services.
      We work closely with you to establish robust frameworks that ensure compliance, mitigate risk, and foster a culture of transparency and accountability.`
    },
    {
      title: "Research Surveys",
      text:  `Gain valuable insights into your market and stakeholders with our tailored Research Surveys.
      Our rigorous methodology and analytical expertise deliver actionable data to inform strategic decision-making and drive business success.`
    },
    {
      title: 'Project Planning, Monitoring, and Evaluation',
      text:  `Ensure the success of your projects from inception to completion with our Project Planning, Monitoring, and Evaluation services.
      Our proven methodologies and rigorous monitoring ensure projects stay on track, delivering results that exceed expectations.`
    },
    {
      title: 'Gender Issues and Mainstreaming',
      text:  `Promote gender equality and inclusion with our Gender Issues and Mainstreaming initiatives.
      We provide strategic guidance and practical solutions to address gender disparities, fostering a more equitable and diverse workplace.`
    },
    {
      title: 'Environmental Impact Assessment and Audit',
      text:  `Commit to sustainability with our Environmental Impact Assessment and Audit services. Our team conducts thorough assessments to minimize environmental impact, ensuring compliance with regulations and fostering a greener future for all.`
    },
    {
      title: 'Employee Satisfaction and Work Environment Survey',
      text:  `Prioritize employee well-being with our Employee Satisfaction and Work Environment Surveys. 
      We delve deep into workplace dynamics to gauge satisfaction levels, enabling you to cultivate a positive work environment that fuels productivity and engagement.`
    },
    {
      title: 'Organizational and Institutional Capacity Building, Training, Analysis & Facilitation',
      text:  `Empower your organization for success with our comprehensive Capacity Building, Training, Analysis, and Facilitation services. 
      From enhancing skills to fostering collaboration, we strengthen your organization's capacity to adapt, innovate, and thrive in today's dynamic landscape`
    }
      
  ])
  return (
    <>
    <div>
      <section className='service-section'>
        <div className='container'>
          <h1>Our Services</h1>
          <div className='cards'>
            {
              cards.map((card, i)=>(
                <div key={i} className='card'>
                  <h3>
                    {card.title}
                  </h3>
                  <p>
                    {card.text}
                  </p>
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </div>
    {/* <Footer/> */}
    </>
    
  )
}

export default Services
