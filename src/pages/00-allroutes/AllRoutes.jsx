import { Routes, Route } from "react-router-dom";
import HomePagePizza from "../01-pizza-menu/HomePagePizza";
import StepsPage from "../02-steps/StepsPage";
import Pizza from "../../components/01-pizaa-menu/Pizza";
import Pizza2 from "../../components/01-pizaa-menu/pizza2";
import Home from "./Home";
import CardsPage from "../03-cards/CardsPage";
import Card01 from "../../components/03-cards/card01";
import Card02 from "../../components/03-cards/Card02";
import Card03 from "../../components/03-cards/Card03";
import TravelListMain from "../../components/04-travel-list/TravelListMain";
import TravellistPage from "../04-travel-list/TravellistPage";
import ComponentPage from "../05-component-page/ComponentPage";
import ComCard01 from "../../components/05-components/ComCard01";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pizza" element={<HomePagePizza />}>
        <Route path="shop1" element={<Pizza />} />
        <Route path="shop2" element={<Pizza2 />} />
      </Route>
      <Route path="/steps" element={<StepsPage />} />
      <Route path="/cards" element={<CardsPage />}>
        <Route path="/cards/card01" element={<Card01 />} />
        <Route path="/cards/card02" element={<Card02 />} />
        <Route path="/cards/card03" element={<Card03 />} />
      </Route>
      <Route path="/travellist" element={<TravellistPage />}>
        <Route path="/travellist/travellist" element={<TravelListMain />} />
      </Route>
      <Route path="/components" element={<ComponentPage />}>
        <Route path="/components/card01" element={<ComCard01 />} />
      </Route>
    </Routes>
  );
};

export default AllRoutes;
