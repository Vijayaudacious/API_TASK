import React from "react";
import Login from "./pages/login/index";
import { Routes, Route } from "react-router-dom";
// import Cards from "./pages/cards/index";
import ProtectedRoutes from "./Auth/index";
import Read from "./pages/Dashbord/Read";
import Edit from "./pages/Form/Edit";
import Create from "./pages/Form/Create";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedRoutes />}>
        <Route exact path="/" element={<Read />}></Route>
        <Route exact path="/create" element={<Create />}></Route>
        <Route exact path="/edit" element={<Edit />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
