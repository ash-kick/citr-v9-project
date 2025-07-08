import React from "react";
import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement(Pizza, {
      name: "The Pepperoni Pizza",
      description: "Cheese, red sauce, pepperoni",
    }),
    React.createElement(Pizza, {
      name: "The Americano Pizza",
      description: "Cheese, red sauce, hotdogs, french fries",
    }),
  ]);
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
