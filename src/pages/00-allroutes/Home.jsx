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
        {/* Add more as you build more apps */}
      </div>
    </div>
  );
}
