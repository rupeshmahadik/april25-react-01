import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const TravellistPage = () => {
  return (
    <div>
      <div className="pizza-home">
        <h2 className="pizza-title">Travel List</h2>
        <div className="pizza-tabs">
          <NavLink to="travellist" className="pizza-tab">
            Travel List 1
          </NavLink>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default TravellistPage;
