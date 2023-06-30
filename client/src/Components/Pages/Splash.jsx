import React from 'react'
import { Link } from 'react-router-dom'

const splash_container = "flex flex-col justify-center items-center h-screen w-screen m-auto bg-black backdrop-blur-3xl"
const splash_text = "text-8xl p-10 text-white gradient-animation font-bold"
const btn_container = "flex flex-row justify-center justify-between items-center w-96"
const login_btn = 'border-2 border-white p-2 text-white w-44 hover:bg-white hover:text-black focus:bg-white focus:text-black hover:cursor-pointer hover:bg-gray-400'
const signup_btn = 'border-2 border-white p-2 text-white w-44 hover:bg-white hover:text-black focus:bg-white focus:text-black hover:cursor-pointer '
function Splash() {
  return (
    <>
      <div className={splash_container}>
        <div className={splash_text}>Chatify</div>
        <div className= {btn_container}>
          <Link to='/login'>
            <input type="button"  className={login_btn} value="Login" />
          </Link>
          <Link to='/signup'>
            <input type="button" className={signup_btn} value="Sign Up" />
          </Link>

        </div>
      </div>
    </>
  )
}

export default Splash