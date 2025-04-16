import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const ComponentPage = () => {
  return (
    <div>
      <div className="pizza-home">
        <h2 className="pizza-title">Components</h2>
        <div className="pizza-tabs">
          <NavLink to="card01" className="pizza-tab">
            Component 1 - CARD
          </NavLink>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default ComponentPage;
