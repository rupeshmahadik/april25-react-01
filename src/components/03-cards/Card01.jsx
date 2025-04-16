import React, { useState } from "react";
import "./card01.css";

function Avtar() {
  return (
    <>
      <div className="card01-avtar">
        <img
          src="https://images.unsplash.com/photo-1742183635084-64c141301176?q=150&w=180&h=180&fit=crop&crop=faces&auto=format"
          alt="Avtar"
        />
      </div>
    </>
  );
}

function Info() {
  return (
    <div className="card01-info">
      <h2>Rupesh Mahadik</h2>
      <p>Frontend Developer</p>
      <p>DEPT Company</p>
    </div>
  );
}

function Skills({ skills }) {
  const skillsList = skills.map((skill, index) => {
    return (
      <li className="card01-li" key={index}>
        {skill}
      </li>
    );
  });
  return (
    <div>
      <ul className="card01-skills">{skillsList}</ul>
    </div>
  );
}

export const Card01 = () => {
  const [skills, SetSkills] = useState([
    "React",
    "JS",
    "CSS",
    "HTML",
    "NodeJS",
    "ExpressJS",
    "MongoDB",
    "Python",
    "Django",
  ]);
  return (
    <div className="card01">
      <Avtar />
      <Info />
      <Skills skills={skills} />
    </div>
  );
};

export default Card01;
