import React, { useEffect, useRef, useState } from 'react'
import Problem from '../../components/problem-statement/Problem'
import Editor from "../../components/code-editor/Editor"

function SolveProblem() {

  return (
    <div className='flex h-screen overflow-x-hidden'>
      <Problem />
      <Editor />
    </div>
  )
}

export default SolveProblem
