import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route } from "react-router";
import { Routes } from "react-router";
import Auth from "./auth/Auth.jsx";
import Service from "./components/Service/Service.jsx";
import Service1 from "./components/Service/Service1.jsx";
import Service2 from "./components/Service/Service2.jsx";
import Service3 from "./components/Service/Service3.jsx";
import Service4 from "./components/Service/Service4.jsx";
import Service5 from "./components/Service/Service5.jsx";
import Service6 from "./components/Service/Service6.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/auth" element={<Auth />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="/service1" element={<Service1 />}></Route>
        <Route path="/service2" element={<Service2 />}></Route>
        <Route path="/service3" element={<Service3 />}></Route>
        <Route path="/service4" element={<Service4 />}></Route>
        <Route path="/service5" element={<Service5 />}></Route>
        <Route path="/service6" element={<Service6 />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
