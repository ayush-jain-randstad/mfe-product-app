import React, { Suspense } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ProductPage from "./Components/ProductPage"
import './index.css'
function App() {
  return (
    <>
      <ProductPage />
    </>
    
  );
}

export default App;
