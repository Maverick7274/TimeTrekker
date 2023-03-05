import React, { useContext } from 'react'
import axios from 'axios'
import AuthContext from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'

function Logout() {

    const { getLoggedIn } = useContext(AuthContext)

    const history = useNavigate()

    async function logOut() {
        await axios.get("http://localhost:5000/auth/logout")

        await getLoggedIn()

        history.navigate('/')
    }

  return (
    <button onClick={logOut}>
        Logout
    </button>
  )
}

export default Logout