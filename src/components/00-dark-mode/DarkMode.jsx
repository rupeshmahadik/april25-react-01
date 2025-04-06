import React from "react";

const DarkMode = ({ darkMode, setDarkMode }) => {
  return (
    <>
      <button onClick={() => setDarkMode(!darkMode)} className="toggle-dark">
        {darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>
    </>
  );
};

export default DarkMode;
