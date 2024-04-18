import { createBrowserRouter, Navigate,RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Statstics from "./Statstics";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to="/statstics" replace /> },
      { path: "/statstics", element: <Statstics /> },
    ],
  },
]);

function App() {
  return (
    <div className="App" text-white >
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
