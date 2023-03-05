import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../../context/AuthContext'
import Logout from '../Logout/Logout'

function Header() {

    const { loggedIn } = useContext(AuthContext)

    console.log(loggedIn)


  return (
    <div>
        <div className="navbar z-[1000] fixed top-0 left-0 bg-base-100 lg:px-[5rem] border-b-2 border-text">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><Link to='/'>Home</Link></li>

                    {
                        loggedIn === false && (
                            <>
                                <li><Link to='/login'>Login</Link></li>
                                <li><Link to="/signup">Sign Up</Link></li>
                            </>
                                
                                
                    )}

                    
                </ul>
                </div>
            </div>
            <div className="navbar-center">
                <Link to='/' className="btn btn-ghost normal-case font-genos font-[900] tracking-[0.25rem] lg:text-5xl text-3xl">Time<span className='font-[500] italic'>Trekker</span></Link>
            </div>
            <div className="navbar-end">

                {
                    loggedIn === false && (
                        <Link to='/signup' className="btn">Get started</Link>
                
                )}

                {
                    loggedIn && (
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <div className='flex justify-center items-center text-[3rem]'>
                                    <i className="fa-solid fa-user"></i>
                                    </div>
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                                </li>
                                <li><Link>Settings</Link></li>
                                <li><Link>Dashboard</Link></li>
                                <li><Logout/></li>
                            </ul>
                        </div>

                )}

            </div>
        </div>
    </div>
  )
}

export default Header