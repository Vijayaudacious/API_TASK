import React from "react";
import Login from "./pages/login/index";
import { Routes, Route } from "react-router-dom";
import Cards from "./pages/cards/index";
import ProtectedRoutes from "./Auth/index";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<Cards />} />
      </Route>
    </Routes>
  );
};

export default App;
