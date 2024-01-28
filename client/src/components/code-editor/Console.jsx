import React, { useState } from 'react'


function Output({result, testcases }){
   const expected = result?.expected;
   const  output = result?.output;
   const  err = result?.err;
  const passed = result?.passed;
   
if(err){
  return (
    <div className='h-full flex justify-center items-center overflow-y-auto overflow-x-hidden text-red-600 bg-white'>
      {err}
    </div>
  )
}


if(passed===undefined&&err==undefined){
  return (
    <div className='h-full flex justify-center items-center overflow-y-auto overflow-x-hidden bg-white text-lg'>
      Run a testcase to see the output
    </div>
  )
}


  return (
    <div className='h-full'>


      <div className=' text-center text-2xl py-4'>
        {passed?(
          <p className='text-green-600'>Accepted</p>
        ):(
          <p className=' text-red-600'>
            Wrong Answer
          </p>
        )}
      </div>


          
        <div className='flex flex-col gap-4 h-4/5'>

          <div className='flex gap-7 h-1/4'>
            <div className=' w-24 text-center text-lg '>Your input</div>
            <div className=' bg-slate-200 w-5/6  items-center px-3 h-full overflow-y-auto overflow-x-hidden py-3'>
              {testcases?.split('\n').map((val,idx)=>{
                 return <div className='py-1'>{val}</div>
              })}
          </div>
          </div>


          <div className='flex gap-7  h-1/4 '>
          <div className=' w-24 text-center text-lg'>Output</div>
            <div className=' bg-slate-200 w-5/6  items-center px-3 overflow-y-auto overflow-x-hidden py-3'>
              {
                 output.map((val,idx)=>{
                    return <div className='py-1'>{val}</div>
                 })
              }
            </div>
          </div>


          <div className='flex gap-7  h-1/4 '>
          <div className='w-24 text-center text-lg'>Expected</div>
            <div className=' bg-slate-200 w-5/6  items-center px-3 overflow-y-auto overflow-x-hidden py-3'>
              {
                     expected.map((val,idx)=>{
                      return <div className='py-1'>{val}</div>
                   })
              }
            </div>
          </div>

        </div>
     
    </div>
  )
}





function Console({show,output,setTestcases,testcases,height}) {

const display  = show?"flex":"hidden";

const [currBtn,setCurrBtn] = useState("output");




  return (
    <div className={`${display} `+'w-full bg-slate-300 flex flex-col flex-grow'}
    style={{height}}
    >
      <div className=' h-1/6 bg-slate-500 w-full flex text-white'>
        <button className='w-1/2 text-center border-r-2 hover:bg-slate-400 transition-all'
         onClick={()=>{
            setCurrBtn("input")
         }}
        >Input</button>
        <button className='w-1/2 text-center hover:bg-slate-400 transition-all '
          onClick={()=>{
            setCurrBtn("output")
         }}
        >Output</button>
      </div>

      <div className='w-full h-4/5'>
      
       {
        currBtn === "input"?(
          <textarea className='h-full w-full resize-none outline-none text-xl ' 
          value={testcases}
          onChange={(ev)=>{
             setTestcases(ev.target.value)
          }}
          >
          </textarea>
        ):(
          <Output result = {output} testcases={testcases}/>
        )
       }
       
       
      </div>
    </div>
  )
}

export default Console
