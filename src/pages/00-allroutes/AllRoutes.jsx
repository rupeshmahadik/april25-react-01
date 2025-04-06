import { Routes, Route } from "react-router-dom";
import HomePagePizza from "../01-pizza-menu/HomePagePizza";
import StepsPage from "../02-steps/StepsPage";
import Pizza from "../../components/01-pizaa-menu/Pizza";
import Pizza2 from "../../components/01-pizaa-menu/pizza2";
import Home from "./Home";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pizza" element={<HomePagePizza />}>
        <Route path="shop1" element={<Pizza />} />
        <Route path="shop2" element={<Pizza2 />} />
      </Route>
      <Route path="/steps" element={<StepsPage />} />
    </Routes>
  );
};

export default AllRoutes;
