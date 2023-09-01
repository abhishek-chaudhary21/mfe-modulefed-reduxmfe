import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";

import Counter1 from "mfe1/Counter1"
import Counter2 from "mfe2/Counter2"



export default function MainLayout() {
  return (
    <Router>
      <div>
        <div>
          <Routes>
            <Route path="/" element={<div><Counter1/> <Counter2/> </div>} />
            {/* <Route path="/routeTest/*" element={<CartIndex/>} />
            <Route path="/cssTest" element={<div><CartAbout/> <PdpAbout/> </div>} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}