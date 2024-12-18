import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import Login from "./Components/Login";
import Register from "./Components/Register";
import AuthLables from "./Components/AuthLables";

// interface Props {
//   loginLable: boolean
// }

const App = () => {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  );
  const [login, setLogin] = useState<boolean>(true);
  return (
    <>
      <div className="w-[400px] m-auto border-2 border-slate-400 mt-2 p-2 rounded-2xl shadow-2xl">
      <AuthLables loginLable={login} setLogin={setLogin} />
      {login ? <Login /> : <Register />}
      </div>
    </>
  );
};

export default App;
