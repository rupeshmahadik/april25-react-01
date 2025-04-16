import React, { useState } from "react";
import "./Card03.css";
import users from "../../data/userscards";

function Avatar({ src }) {
  return (
    <div className="card03-avatar">
      <img src={src} alt="Avatar" />
    </div>
  );
}

function Info({ name, role, company }) {
  return (
    <div className="card03-info">
      <h2>{name}</h2>
      <p>{role}</p>
      <p>{company}</p>
    </div>
  );
}

function Skills({ skills, colors }) {
  const skillsList = skills.map((skill, index) => {
    const style = { backgroundColor: colors[index % colors.length] };
    return (
      <li className="card03-skill" key={index} style={style}>
        {skill}
      </li>
    );
  });

  return <ul className="card03-skills">{skillsList}</ul>;
}

export const Card03 = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };

  return (
    <div className="card03-container">
      {users.slice(0, visibleCount).map((user) => (
        <div className="card03" key={user.id}>
          <Avatar src="https://images.unsplash.com/photo-1742183635084-64c141301176?q=150&w=180&h=180&fit=crop&crop=faces&auto=format" />
          <Info name={user.name} role={user.role} company={user.company} />
          <Skills skills={user.skills} colors={user.colors} />
        </div>
      ))}
      {visibleCount < users.length && (
        <button className="load-more" onClick={loadMore}>
          Load More
        </button>
      )}
    </div>
  );
};

export default Card03;
