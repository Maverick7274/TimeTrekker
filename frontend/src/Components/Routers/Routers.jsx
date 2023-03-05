import React, { useContext } from "react";
import Header from "../Header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import SignUp from "../SignUp/SignUp";
import Login from "../Login/Login";
import AuthContext from '../../context/AuthContext'
import CreateCountdown from "../Countdown/CreateCountdown";

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
          
          {
            loggedIn && (
                <Route path="/new" element={<CreateCountdown/>}/>
            )}

        </Routes>
      </div>
    </>
  );

}


export default Routers;
