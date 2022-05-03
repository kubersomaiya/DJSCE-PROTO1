import React, { useState } from "react";
import SecondPage from "./secondPage"
import './firstPage.css';

const FirstPage = () => {
  const [admin, setAdmin] = useState(false);
  function handleC1(e) {
      e.preventDefault()
    setAdmin(false);
    admin(true)
  }

  function handleC2(e) {
    e.preventDefault()
    setAdmin(true);
  }
  return (
    <div>
     { !admin?<form action="">
        <label htmlFor="login" id="login" className="label">SAP ID :</label>
        <input type="email" name="loginIn" id="loginIn"  className="labelIn"/><br />
        <label htmlFor="pass" id="pass" className="label">Password :</label>
        <input type="password" name="pass" id="passIn" className="labelIn" /><br />
        <button className = "btn" onClick={handleC1}>Are you Admin?</button>
        <button className = "login" onClick={handleC2}>Login</button>
      </form>:<SecondPage/>}
    </div>
  );
};

export default FirstPage;
