import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RouterHome from "./pages/RouterHome/Index.jsx";
import RouterCrud from "./pages/RouterCrud/Index.jsx";
import "./App.css";

function App() {
 return (
  <BrowserRouter>
   <Routes>
    <Route path="/" element={<RouterHome />} />
    <Route path="/crud" element={<RouterCrud />} />
   </Routes>
  </BrowserRouter>
 );
}

export default App;
