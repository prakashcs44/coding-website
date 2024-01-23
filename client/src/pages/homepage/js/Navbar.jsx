import React from 'react'
import leetcodeLogo from "../assets/LeetCode_logo_rvs.png"
function Navbar() {


  return (
    <div className="h-20  flex justify-around items-center gap-96">
     <div className='flex items-center gap-5'>
      <img src={leetcodeLogo} className="h-16 w-16"/>
      <h1 className=" text-3xl text-white">LeetCode</h1>
     </div>
     <div>
      <ul className="flex justify-between items-center gap-10 text-xl text-white">
        <li className=" text-orange-400  hover:bg-white hover:text-black hover:rounded-3xl w-32 h-10 flex justify-center items-center transition-all">Premium</li>
        <li className="hover:bg-white hover:text-black hover:rounded-3xl w-32 h-10  flex justify-center items-center transition-all">Explore</li>
        <li className="hover:bg-white hover:text-black hover:rounded-3xl w-32 h-10  flex justify-center items-center transition-all">Product</li>
        <li className="hover:bg-white hover:text-black hover:rounded-3xl w-32 h-10  flex justify-center items-center transition-all">Developer</li>
        <li className="hover:bg-white hover:text-black hover:rounded-3xl w-32 h-10  flex justify-center items-center transition-all">Sign in</li>
      </ul>
     </div>
    </div>
  )
}

export default Navbar
