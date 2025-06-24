import React from "react";
import { createRoot } from "react-dom/client";

const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement(Pizza, {
      name: "The Pepperoni Pizza",
      description: "Pepperoni, Cheese, Reds sauce",
    }),
    React.createElement(Pizza, {
      name: "The Americano",
      description: "French fries and Hot dogs",
    }),
    React.createElement(Pizza, {
      name: "The Hawaiian Pizza",
      description: "Pineapple, Cheese, Ham, Red sauce",
    }),

    React.createElement(Pizza, {
      name: "Chicken Pizza",
      description: "Chicken Nuggets on Pizza",
    }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
