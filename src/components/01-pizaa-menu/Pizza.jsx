import React from "react";
import "./pizza.css";
import { useState } from "react";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "/pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "/pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "/pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "/pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "/pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "/pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

const Header = () => {
  return (
    <header>
      <h2>🍕 FAST PIZZA SHOP 🍕</h2>
    </header>
  );
};

const Menu = () => {
  const [pizzas, setPizzas] = useState(pizzaData);
  return (
    <>
      <h2 style={{ textAlign: "center" }}>OUR MENU</h2>
      <p style={{ textAlign: "center" }}>
        Authentic Italian cuisine. 6 creative dishes to choose from. All from
        our stone oven, all organic, all delicious.
      </p>
      <div className="pizza-menu-container">
        {pizzas.map((pizza) => (
          <div className="pizza-menu-box animate-fly-in" key={pizza.name}>
            <div>
              <img src={pizza.photoName} alt={pizza.name} />
            </div>
            <div>
              <h2>{pizza.name}</h2>
              <p>{pizza.ingredients}</p>
              <p>{pizza.price}</p>
              <p className={`${pizza.soldOut ? "sold-out" : ""}`}>
                {pizza.soldOut ? "SOLD OUT" : ""}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
const Footer = () => {
  return (
    <footer>
      <p>We're open from 12:00 to 22:00. Come visit us or order online.</p>
      <button>Order</button>
    </footer>
  );
};

const Pizza = () => {
  return (
    <div className="container-main-pizza">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
};

export default Pizza;
