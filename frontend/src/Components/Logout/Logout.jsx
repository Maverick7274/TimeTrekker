import React, { useContext } from 'react'
import axios from 'axios'
import AuthContext from '../../context/AuthContext'

function Logout() {

    const { getLoggedIn } = useContext(AuthContext)

    async function logOut() {
        await axios.get("http://localhost:5000/auth/logout")

        getLoggedIn()
    }

  return (
    <button onClick={logOut}>
        Logout
    </button>
  )
}

export default Logout