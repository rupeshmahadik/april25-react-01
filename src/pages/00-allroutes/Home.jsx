// src/pages/Home.jsx
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="main-home">
      <h1>🚀 Welcome to the React Playground</h1>
      <p>Explore each mini app below:</p>

      <div className="link-grid">
        <Link to="/pizza" className="link-card">
          🍕 Pizza App
        </Link>
        <Link to="/steps" className="link-card">
          📋 Step Tracker
        </Link>
        <Link to="/cards" className="link-card">
          📇 Cards
        </Link>
        <Link to="/travellist" className="link-card">
          💼 Travel List
        </Link>
        <Link to="/components" className="link-card">
          💻 Components
        </Link>
        {/* Add more as you build more apps */}
      </div>
    </div>
  );
}
