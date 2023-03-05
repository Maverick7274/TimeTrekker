import axios from 'axios'
import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function SignUp() {


  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')


  async function signUp(e)
  {
    e.preventDefault()

    try {
      
      const signUpData = {
        name,
        email,
        password,
        confirmPassword,
      };

      await axios.post('http://localhost:5000/auth/', signUpData);

    } catch (error) {
      console.log(error)
    }
  }




  return (
    <div className=''>
        <div className="flex flex-col items-center justify-center h-screen">
          <div className='lg:mt-[4.5rem] lg:pt-[15rem] pt-[0] pb-[2rem] lg:w-[50%] w-[80%] lg:bg-inherit bg-secondary rounded-[0.23rem]'>
            <div className='lg:py-[3rem] py-[1rem] flex flex-col gap-[1rem]'>
              <h1 className="lg:text-5xl text-3xl text-center font-tilt font-[700]">Sign Up</h1>
              <p className='lg:text-3xl text-l font-quicksand font-[500] text-center'>Create a New Account</p>
            </div>
            
            {/* Sign Up Form */}
            <div className='pb-[1rem] flex flex-col justify-center items-center w-full'>
              <form className="flex flex-col lg:gap-[3rem] gap-[1rem] lg:w-[90%] w-[80%]" onSubmit={signUp}>
                
                {/* Name */}
                <div className='flex flex-col gap-[1rem]'>
                  <label>
                    <span className='label-text font-josefin font-[700] text-xl lg:text-[1.7rem]'>Your Name</span>
                  </label>
                  <input type="text" placeholder='Type your Name here' onChange={(e) => setName(e.target.value)} value={name} className='input input-primary input-bordered lg:input-md input-sm w-full lg:text-[1.2rem] text-[0.8rem] max-w font-josefin' />
                </div>

                {/* Email */}
                <div className='flex flex-col gap-[1rem]'>
                  <label>
                    <span className='label-text font-josefin font-[700] text-xl lg:text-[1.7rem]'>Your Email</span>
                  </label>
                  <input type="text" placeholder='Type your Email here' onChange={(e) => setEmail(e.target.value)} value={email} className='input input-primary input-bordered lg:input-md input-sm w-full lg:text-[1.2rem] text-[0.8rem] max-w font-josefin' />
                </div>
                
                {/* Password */}
                <div className='flex flex-col gap-[1rem]'>
                  <label>
                    <span className='label-text font-josefin font-[700] text-xl lg:text-[1.7rem]'>Password</span>
                  </label>
                  <input type="password" placeholder='Type your Password here' onChange={(e) => setPassword(e.target.value)} value={password} className='input input-primary input-bordered lg:input-md input-sm w-full lg:text-[1.2rem] text-[0.8rem] max-w font-josefin' />
                </div>
                
                {/* Confirm Password */}
                <div className='flex flex-col gap-[1rem]'>
                  <label>
                    <span className='label-text font-josefin font-[700] text-xl lg:text-[1.7rem]'>Confirm Password</span>
                  </label>
                  <input type="password" placeholder='Type your Password here' onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} className='input input-primary input-bordered lg:input-md input-sm w-full lg:text-[1.2rem] text-[0.8rem] max-w font-josefin' />
                </div>
                
                {/* Button */}
                <div className='grid justify-end'>
                  <button className='btn btn-primary font-quicksand lg:text-2xl lg:btn-lg btn-sm lg:font-[900] font-[700]'>Sign Up</button>
                </div>
              
              </form>
            </div>

            <div>
              <p className='text-center font-josefin font-[700] lg:text-[1.7rem]'>Already have an account? <Link to='/login' className='lg:text-accent text-primary hover:underline lg:hover:text-accent-focus hover:text-primary-focus underline-offset-8 active:text-base-content'>Login</Link></p>
            </div>

          </div>
        </div>
    </div>
  )
}

export default SignUp