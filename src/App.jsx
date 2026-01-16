import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from "./pages/Register";
import SignIn from "./pages/SignIn";
import DashBoard from "./pages/DashBoard";
import { Home } from "./pages/Home";
import { AuthProvider } from "./context/AuthProvider";
import { StudentProfileProvider } from "./context/StudentProfileContext";

function App() {
  return (
    <>
      <AuthProvider>
        <StudentProfileProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/dashboard" element={<DashBoard />} />
            </Routes>
          </BrowserRouter>
        </StudentProfileProvider>
      </AuthProvider>
    </>
  );
}

export default App;
