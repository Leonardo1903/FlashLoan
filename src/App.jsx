import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing";
import FlashLoan from "./pages/FlashLoan";
import AppLayout from "./layout/AppLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Landing />} />
          <Route path="flash-loan" element={<FlashLoan />} />
        </Route>
      </>
    )
  );
  return (
    <div className="max-w-screen">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
