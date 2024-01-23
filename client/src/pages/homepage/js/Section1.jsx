import React from 'react'
import codingImg from "../assets/coding.png"
function Section1() {
  return (
    <div className="mt-20 flex">
        <div className='mx-auto '>
            <img src={codingImg} alt="img" className=' h-96 w-96'/>
        </div>
     <div className = "flex flex-col items-center gap-28 mx-auto ">
        <h1 className ="text-white text-5xl">A New Way to Learn</h1>
         <div className='text-xl flex flex-col justify-center items-center text-zinc-400'>
            <p>LeetCode is the best platform to help you enhance your skills, expand</p>
            <p>your knowledge and prepare for technical interviews.</p>
         </div>
        <button className  =  " w-56 h-12 bg-teal-500 text-xl rounded-3xl text-white hover:bg-teal-700 transition-all">Create Account</button>
     </div>
    </div>
  )
}

export default Section1
