import React, { useState } from "react";
import Header from "./Components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import SignUp from "./Components/SignUp/SignUp";
import Login from "./Components/Login/Login";
import Footer from "./Components/Footer/Footer";
import axios from "axios";

import { AuthContextProvider } from "./context/AuthContext";

axios.defaults.withCredentials = true;

function App() {

  const [loggedIn , setLoggedIn] = useState(undefined);


  return (
    <AuthContextProvider>
      <div className="selection:bg-base-content selection:text-base-300">
        <Header />

        <Routes>

          {loggedIn === false && (            
            <>
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
            </>

            )}
          <Route path="/" element={<Home />} />

        </Routes>
        <Footer />
      </div>
    </AuthContextProvider>
  );
}

export default App;
