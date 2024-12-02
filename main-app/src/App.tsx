import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";
import { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./Components/MainPage";

const Cart = React.lazy(() => import("cartPage/Cart"));
const Login = React.lazy(() => import("LoginPage/Login"));
const Product = React.lazy(() => import("productPage/Product"));
function App() {
  const { user, loginWithRedirect, logout } = useAuth0();
  const token = localStorage.getItem("token");
  return (
    <>
      <Router>
        <div>
          <h1>Hello from Main App, {user?.name}</h1>

          <Suspense fallback={<div>Loading ...</div>}>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    {!token || user === undefined ? (
                      <>
                        <Login />
                        {user?.name === undefined && (
                          <button onClick={() => loginWithRedirect()}>
                            Login with your google Account
                          </button>
                        )}
                      </>
                    ) : (
                      <>
                        <button onClick={() => logout()}>Logout</button>
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
