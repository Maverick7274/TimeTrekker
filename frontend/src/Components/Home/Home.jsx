import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://source.unsplash.com/random/1920×1080/")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-[60%]">
                        <div className='flex justify-center items-center'>
                            <h1 className="normal-case font-genos text-[#fff] font-[900] tracking-[0.5rem] text-center lg:text-[9rem] text-[2rem]">Time<span className='font-[500] italic'>Trekker</span></h1>
                        </div>
                        <div className='w-full'>
                            <p className="mb-[2rem] w-full font-josefin lg:font-[700] md:font-[500] font-[300] lg:text-[1.5rem] lg:leading-[1.5rem] leading-[1.1rem] text-[#fff]">Count down to your next big event with our sleek web app. Customize and track the time remaining with real-time updates.</p>
                        </div>
                    <Link to='/signup' className="btn lg:uppercase normal-case font-quicksand text-2xl btn-primary">Get Started</Link>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Home