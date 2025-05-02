import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<About />} />
          <Route path="/login" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
