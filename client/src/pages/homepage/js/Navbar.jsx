import React from 'react'
import leetcodeLogo from "../assets/LeetCode_logo_rvs.png"
import {Link} from "react-router-dom"
function Navbar() {


  return (
    <div className="h-20  flex justify-around items-center gap-96">
     <div className='flex items-center gap-5'>
      <img src={leetcodeLogo} className="h-16 w-16"/>
      <h1 className=" text-3xl text-white">LeetCode</h1>
     </div>
     <div>
      <div className="flex justify-between items-center gap-10 text-xl text-white">
        <button className=" text-orange-400  hover:bg-white hover:text-black hover:rounded-3xl w-32 h-10 flex justify-center items-center transition-all cursor-pointer">
         <Link to="/premium">Premium</Link>
          </button>
        <button className="hover:bg-white hover:text-black hover:rounded-3xl w-32 h-10  flex justify-center items-center transition-all cursor-pointer">
        <Link to="/explore">Explore</Link>
          </button>
        <button className="hover:bg-white hover:text-black hover:rounded-3xl w-32 h-10  flex justify-center items-center transition-all cursor-pointer">
        <Link to="/problem-list">Problems</Link>
          </button>
        <button className="hover:bg-white hover:text-black hover:rounded-3xl w-32 h-10  flex justify-center items-center transition-all cursor-pointer">
        <Link to="/developers">Developer</Link>
          </button>
        <button className="hover:bg-white hover:text-black hover:rounded-3xl w-32 h-10  flex justify-center items-center transition-all cursor-pointer">
        <Link to="/sign-in">Sign in</Link>
          </button>
      </div>
     </div>
    </div>
  )
}

export default Navbar
