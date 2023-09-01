import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import CounterComponent from "./Counter1";

const root =  ReactDOM.createRoot( document.getElementById("app")); 

root.render(<CounterComponent />);
