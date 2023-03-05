import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Login() {


        const [name, setName] = useState('')
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
      
      
        async function login(e)
        {
          e.preventDefault()
      
          try {
            
            const loginData = {
              email,
              password,
            };
      
            await axios.post('http://localhost:5000/auth/login', loginData);
      
          } catch (error) {
            console.log(error)
          }
        }


  return (
    <div>
        <div className="flex flex-col items-center justify-center h-screen">
            <div className='lg:mt-[4.5rem] pb-[2rem] lg:w-[50%] w-[80%] lg:bg-inherit bg-secondary rounded-[0.23rem]'>
                <div className='lg:py-[3rem] py-[1rem] flex flex-col gap-[1rem]'>
                    <h1 className="lg:text-5xl text-3xl text-center font-tilt font-[700]">Login</h1>
                    <p className='lg:text-3xl text-l font-quicksand font-[500] text-center'>Login to an Existing Account</p>
                </div>

                <div className='pb-[1rem] flex flex-col justify-center items-center w-full'>
                    <form className="flex flex-col lg:gap-[3rem] gap-[1rem] lg:w-[90%] w-[80%]" onSubmit={login}>
                        <div className='flex flex-col gap-[1rem]'>
                            <label>
                                <span className='label-text font-josefin font-[700] text-xl lg:text-[1.7rem]'>Your Email</span>
                            </label>
                            <input type="text" placeholder='Type your Email here' onChange={(e) => setEmail(e.target.value)} value={email} className='input input-primary input-bordered lg:input-md input-sm w-full lg:text-[1.2rem] text-[0.8rem] max-w font-josefin' />
                        </div>
                        <div className='flex flex-col gap-[1rem]'>
                            <label>
                                <span className='label-text font-josefin font-[700] text-xl lg:text-[1.7rem]'>Password</span>
                            </label>
                            <input type="password" placeholder='Type your Password here' onChange={(e) => setPassword(e.target.value)} value={password} className='input input-primary input-bordered lg:input-md input-sm w-full lg:text-[1.2rem] text-[0.8rem] max-w font-josefin' />
                        </div>
                        <div className='grid justify-end gap-[1rem]'>
                            <button type='submit' className='btn btn-primary font-quicksand lg:text-2xl lg:btn-lg btn-sm lg:font-[900] font-[700]'>Login</button>
                        </div>
                    </form>
                </div>

                <div>
                <p className='text-center font-josefin font-[700] lg:text-[1.7rem]'>New Here? <Link to='/signup' className='lg:text-accent text-primary hover:underline lg:hover:text-accent-focus hover:text-primary-focus underline-offset-8 active:text-base-content'>Sign Up</Link></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login