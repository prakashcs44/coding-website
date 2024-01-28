import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function ProblemsList() {

const [problems,setProblems] = useState([])


const fetchProblems = async ()=>{
  const url = "http://localhost:3000/problems";
   try{
    const response = await fetch(url);
    const responseJson = await response.json();
    setProblems(responseJson);
   }
   catch(err){
    
   }



}

useEffect(()=>{

  fetchProblems();


},[])



  return (
    <div className='flex  bg-white my-10 mx-auto w-3/4'>
      <div className=' w-1/12'>

        <h1 className=' border-y-2 text-lg'>Status</h1>
        <div className=" h-10 px-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" class="h-[18px] w-[18px] cursor-pointer text-green-s dark:text-dark-green-s"><path fill-rule="evenodd" d="M20 12.005v-.828a1 1 0 112 0v.829a10 10 0 11-5.93-9.14 1 1 0 01-.814 1.826A8 8 0 1020 12.005zM8.593 10.852a1 1 0 011.414 0L12 12.844l8.293-8.3a1 1 0 011.415 1.413l-9 9.009a1 1 0 01-1.415 0l-2.7-2.7a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></div>
       <div className=" h-10 px-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" class="h-[18px] w-[18px] cursor-pointer text-green-s dark:text-dark-green-s"><path fill-rule="evenodd" d="M20 12.005v-.828a1 1 0 112 0v.829a10 10 0 11-5.93-9.14 1 1 0 01-.814 1.826A8 8 0 1020 12.005zM8.593 10.852a1 1 0 011.414 0L12 12.844l8.293-8.3a1 1 0 011.415 1.413l-9 9.009a1 1 0 01-1.415 0l-2.7-2.7a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></div>
       <div className=" h-10 px-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" class="h-[18px] w-[18px] cursor-pointer text-green-s dark:text-dark-green-s"><path fill-rule="evenodd" d="M20 12.005v-.828a1 1 0 112 0v.829a10 10 0 11-5.93-9.14 1 1 0 01-.814 1.826A8 8 0 1020 12.005zM8.593 10.852a1 1 0 011.414 0L12 12.844l8.293-8.3a1 1 0 011.415 1.413l-9 9.009a1 1 0 01-1.415 0l-2.7-2.7a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></div>
       <div className=" h-10 px-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" class="h-[18px] w-[18px] cursor-pointer text-green-s dark:text-dark-green-s"><path fill-rule="evenodd" d="M20 12.005v-.828a1 1 0 112 0v.829a10 10 0 11-5.93-9.14 1 1 0 01-.814 1.826A8 8 0 1020 12.005zM8.593 10.852a1 1 0 011.414 0L12 12.844l8.293-8.3a1 1 0 011.415 1.413l-9 9.009a1 1 0 01-1.415 0l-2.7-2.7a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></div>

      </div>
      <div className='w-7/12'>
       <h1 className=' border-y-2 text-lg'>Title</h1>
      
       {problems?.map((problem,idx)=>{
          return <div className=" h-10 px-2 py-2"><Link to={`/problems/${problem._id}`}>{problem.title}</Link></div>
       })}
      </div>
      <div className='w-1/12 '>
        <h1 className=' border-y-2 text-lg'>Solution</h1>
      </div>
      <div className='w-1/12'>
        <h1 className=' border-y-2 text-lg'>Acceptance</h1>
       {problems?.map((problem,idx)=>{
          return <div className=" h-10 px-2 py-2">{problem.acceptance_rate}</div>
       })}
      </div>
      <div className='w-1/6 '>
         <h1 className=' border-y-2 text-lg px-2'>Difficulty</h1>
       {problems?.map((problem,idx)=>{
          return <div className={`h-10 py-2 px-2 ${problem.difficulty==="Easy"?"text-green-600":problem.difficulty==="Medium"?"text-orange-400":"text-red-500"}`} >
            {problem.difficulty}</div>
       })}
      </div>
    </div>
  )
}

export default ProblemsList
