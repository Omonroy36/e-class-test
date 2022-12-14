import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./views/Home";
import Details from "./views/Details";
import Favorites from "./views/Favorites";
import Nicknames from "./views/Nicknames";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/nickNames" element={<Nicknames />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
