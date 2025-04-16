import React from "react";
import { Card01 } from "../../components/03-cards/card01";
import { Card02 } from "../../components/03-cards/Card02";
import { Routes, Route, NavLink, Outlet } from "react-router-dom";

const CardsPage = () => {
  return (
    <div>
      <div className="pizza-home">
        <h2 className="pizza-title">Cards Page</h2>
        <div className="pizza-tabs">
          <NavLink to="card01" className="pizza-tab">
            Card 1
          </NavLink>
          <NavLink to="card02" className="pizza-tab">
            Card 2
          </NavLink>
          <NavLink to="card03" className="pizza-tab">
            Card 3
          </NavLink>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default CardsPage;
