import React, { useEffect, useRef, useState } from 'react'
import Problem from '../../components/problem-statement/Problem'
import Editor from "../../components/code-editor/Editor"
import { useLocation} from 'react-router-dom'

function SolveProblem() {

  const [problem,setProblem] = useState(); 

  const problemId = useLocation().pathname.split("/")[2];
  
  async function fetchProblem(){
      const response = await fetch("http://localhost:3000/problems/"+problemId)
      const responseJson = await response.json();
      setProblem(responseJson)
      
  }

  useEffect(()=>{
   fetchProblem();
  },[])






  return (
    <div className='flex h-screen overflow-x-hidden'>
      <Problem problem = {problem}/>
      <Editor boilerPlateCode = {problem?.bpcode} />
    </div>
  )
}

export default SolveProblem
