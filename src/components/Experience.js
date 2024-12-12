import React from "react";
import "../assets/styles/Education.css";

const Experience = () => {
  const educationData = [
    {
      title: "Cloud Software Engineer",
      institute: "Providence India · Internship",
      date: "Jun 2024 - Aug 2024",
      location: "Hyderabad, Telangana, India · On-site",
      des: "Resolved 40 vulnerable packages, reducing security risks by 90.91% across 9 microservices, and implemented a version control system using Liquibase. Also developed a POST API for dynamic key-value updates in microservices without code changes.",
    },
    {
      title: "Flipkart <Girls Wanna Code/> 5.0",
      institute: "Flipkart · Apprenticeship",
      date: "Apr 2024 - Jun 2024",
      location: "Pune, Maharashtra, India · Remote",
      des: "Gained hands-on experience in Data Structures and Algorithms, and learned best practices under the guidance of experienced Flipkart mentors and employees.",
    },
    {
      title: "Web Developer",
      institute: "Linkcode Technologies · Internship",
      date: "Jul 2021 - Sep 2021",
      location: "Pune, Maharashtra, India · Hybrid",
      des: "Developed a frontend web application using HTML, CSS, and JavaScript which displayed hospital information such as facilities and appointment form.",
    },
  ];

  return (
    <div className="edu">
      <div className="education-section">
        <span className="icon">💼</span> Experience
      </div>
      <div className="timeline">
        {/* Central timeline line */}
        <div className="timeline-line"></div>

        {educationData.map((item, index) => (
          <div
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            key={index}
          >
            {/* Dot */}
            <div className="timeline-dot"></div>

            {/* Content */}
            <div className="timeline-content">
              <h3>{item.title}</h3>
              <p>{item.institute}</p>
              <p>📅 {item.date}</p>
              <p>{item.location}</p>
              <p>{item.des}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
