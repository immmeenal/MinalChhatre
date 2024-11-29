import React from "react";
import "../assets/styles/Education.css";

const Education = () => {
  const educationData = [
    {
      title: "Btech in Information ",
      institute: "MKSSS's Cummins College of Engineering Pune, India",
      date: "2022 - 2025 (Present)",
      grade: "8.0/10.0",
    },
    {
      title: "Diploma in Computer Engineering",
      institute: "Government Polytechnic Pune, India",
      date: "2019 - 2022",
      grade: "89.47/100",
    },
  ];

  return (
    <div className="edu">
      <div className="education-section">
        <span className="icon">🎓</span> Education
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
              <p>{item.grade}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
