import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import CourseCard from "./components/ui/CourseCard.jsx";
import Navbar from "./components/ui/Navbar.jsx";
import { Provider } from "react-redux";
import { store } from "./state/store.jsx";
import AuthPage from "./components/AuthPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route path="/" element={<App />} />
      <Route path="/:courseId" element={<CourseCard />} />{" "}
      <Route path="/auth" element={<AuthPage />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
