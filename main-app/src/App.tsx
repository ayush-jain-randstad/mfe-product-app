import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './Components/MainPage';

const Cart = React.lazy(() => import("cartPage/Cart"));
const Login = React.lazy(() => import("LoginPage/Login"));
const Product = React.lazy(() => import("productPage/Product"));
function App() {
  return (
    <>
    <Router>
      
    <div>
        
        <Suspense fallback={<div>Loading ...</div>}>
          <Routes>
            <Route path="/" element={<><Login /> <Cart /> <Product /> <MainPage/> </> } />
       
          </Routes>

        </Suspense>
      </div>
     </Router>
     </>
  );
}

export default App;
