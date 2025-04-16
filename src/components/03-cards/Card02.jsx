import React from "react";
import "./Card02.css";

function Avatar() {
  return (
    <div className="card02-avatar">
      <img
        src="https://images.unsplash.com/photo-1742183635084-64c141301176?q=150&w=180&h=180&fit=crop&crop=faces&auto=format"
        alt="Avatar"
      />
    </div>
  );
}

function Info() {
  return (
    <div className="card02-info">
      <h2>Rupesh Mahadik</h2>
      <p>Frontend Developer</p>
      <p>DEPT Company</p>
    </div>
  );
}

function Skills({ skills }) {
  const colors = [
    "#FF5733", // Red
    "#33FF57", // Green
    "#3357FF", // Blue
    "#FFC300", // Yellow
    "#DAF7A6", // Light Green
    "#FF33A6", // Pink
    "#33FFF6", // Cyan
    "#A633FF", // Purple
    "#FF8C33", // Orange
  ];

  const skillsList = skills.map((skill, index) => {
    const style = { backgroundColor: colors[index % colors.length] };
    return (
      <li className="card02-skill" key={index} style={style}>
        {skill}
      </li>
    );
  });

  return <ul className="card02-skills">{skillsList}</ul>;
}

export const Card02 = () => {
  const skills = [
    "React",
    "JS",
    "CSS",
    "HTML",
    "NodeJS",
    "ExpressJS",
    "MongoDB",
    "Python",
    "Django",
  ];

  return (
    <div className="card02">
      <Avatar />
      <Info />
      <Skills skills={skills} />
    </div>
  );
};

export default Card02;
