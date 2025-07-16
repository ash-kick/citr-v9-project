import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CartContext } from "./contexts";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

const App = () => {
  const cartHook = useState([]);
  return (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
