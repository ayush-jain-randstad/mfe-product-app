import React, { useState } from "react";
import { useAuth0, } from "@auth0/auth0-react";
import "./App.css";
import "./index.css";
import { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./Components/MainPage";

const Cart = React.lazy(() => import("cartPage/Cart"));
const Login = React.lazy(() => import("LoginPage/Login"));
const Product = React.lazy(() => import("productPage/Product"));
function App() {
  const { user, loginWithRedirect, logout } = useAuth0();
  const [token, setToken] = useState(localStorage.getItem("token"));
  // const token = localStorage.getItem("token");
  const handleLogout =  () => {
     logout();
     localStorage.setItem("token", '');
     window.location.reload();
  }
  return (
    <>
      <Router>
        <div>
          {/* <h1>Hello from Main App, {user?.name}</h1> */}

          <Suspense fallback={<div>Loading ...</div>}>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    {!token ? !user ?                    <>
                      <Login />
                        {user === undefined && (
                          <button id="login-button-google" className="bg-blue-600 p-2 rounded w-[30%] text-white rounded hover:bg-blue-500 text-center font-bold ml-[35%] mt-4" onClick={() => loginWithRedirect()}>
                            Login with your google Account
                          </button>
                        )}  
                      </> : (
                      <>
                      <button className="bg-blue-600 p-1 rounded w-20 border-2 text-white rounded hover:bg-blue-500 float-right mr-4 font-bold" onClick={handleLogout }>Logout</button>
                        <Cart />
                        <Product />
                        <MainPage />
                      </>
                      
                    ) :  (
                    <>
                      <button className="bg-blue-600 p-1 rounded w-20 border-2 text-white rounded hover:bg-blue-500 float-right mr-4 font-bold" onClick={handleLogout }>Logout</button>
                        <Cart />
                        <Product />
                        <MainPage />
                      </>
                    )}
                  </>
                }
              />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </>
  );
}

export default App;
