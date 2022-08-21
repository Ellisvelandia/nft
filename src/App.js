import React from "react";
import Home from "./components/Home";
import Clients from "./components/Clients";
import CreateAndSell from "./components/CreateAndSell";
import Choose from "./components/Choose";
import MarketPlace from "./components/MarketPlace";

export default function App() {
  return (
    <div>
      <Home />
      <Clients />
      <CreateAndSell />
      <Choose />
      <MarketPlace />
    </div>
  );
}
