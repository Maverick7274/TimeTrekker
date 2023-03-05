import React, { useContext } from "react";
import Header from "../Header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import SignUp from "../SignUp/SignUp";
import Login from "../Login/Login";
import AuthContext from '../../context/AuthContext'

function Routers() {
    
    const { loggedIn } = useContext(AuthContext)


  return (
    <>
      <div>
        <Routes>

          {loggedIn === false && (            
            <>
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
            </>

            )}
          <Route path="/" element={<Home />} />

        </Routes>
      </div>
    </>
  );

}


export default Routers;
