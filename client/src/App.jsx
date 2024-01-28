import React from 'react'
import './App.css'
import SolveProblem from './pages/problempage/SolveProblem'
import Combined from "./pages/homepage/js/Combined"
import ProblemsList from './pages/problems/ProblemsList'
import { Route, Routes } from 'react-router-dom'
import Select from './components/Select'
function App() {
 
  return (
   <div>
   <Routes>

    <Route path='/' element = {<Combined/>}/>
    <Route path='/problem-list' element = {<ProblemsList/>}/>
    <Route path = '/problems/:problemid' element = {<SolveProblem/>}/>
    <Route path = '/test' element = {<Select/>}/>
   </Routes>

   
   </div>
  )
}

export default App
