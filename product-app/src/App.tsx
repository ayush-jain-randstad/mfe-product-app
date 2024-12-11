import React, { Suspense } from "react";
import './App.css';
import './index.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ProductPage from "./Components/ProductPage"

function App() {
  return (
    <>
      <ProductPage />
    </>
    
  );
}

export default App;
