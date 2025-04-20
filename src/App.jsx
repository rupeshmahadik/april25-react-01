import "./App.css";
import { useState } from "react";
import HomePagePizza from "./pages/01-pizza-menu/HomePagePizza";
import DarkMode from "./components/00-dark-mode/DarkMode";
import AllRoutes from "./pages/00-allroutes/AllRoutes";
import Navbar from "./components/0-navbar/Navbar";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <BrowserRouter>
      <div className={darkMode ? "dark" : ""}>
        <h2 className="center">🌸 The Ultimate React 🌸</h2>
        {/* <DarkMode darkMode={darkMode} setDarkMode={setDarkMode} /> */}
        <Navbar />
        <AllRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
