import React, { useState } from "react";
import axios from "axios";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { AuthContextProvider } from "./context/AuthContext";
import Routers from "./Components/Routers/Routers";

axios.defaults.withCredentials = true;

function App() {

  const [loggedIn , setLoggedIn] = useState(undefined);


  return (
    <AuthContextProvider>
      <div className="selection:bg-base-content selection:text-base-300">
        <Header />
        <Routers/>
        <Footer />
      </div>
    </AuthContextProvider>
  );
}

export default App;
