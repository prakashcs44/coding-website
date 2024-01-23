import React, { useState } from 'react'






function convertToTestcases(tsc) {
  try{
    const temp = tsc.split('\n').filter(item => item.trim() !== '');
    const result  = [];
     for(let i=0;i<temp.length;i++){
        result.push(JSON.parse(temp[i]));
     }
     return result;
  }
  catch(err){
   //
  }


}




function Output({result, testcases }){
 
    
   const expected = result?.expected;
   const  output = result?.output;
   const  err = result?.err;
    const passed = result?.passed;
   
if(err){
  return (
    <div className='h-full flex justify-center items-center overflow-y-auto overflow-x-hidden text-red-600'>
      {err}
    </div>
  )
}


if(passed===undefined&&err==undefined){
  return (
    <div className='h-full flex justify-center items-center overflow-y-auto overflow-x-hidden'>
      Run a testcase to see the output
    </div>
  )
}


  return (
    <div className='h-full'>
      <div className=' text-center text-2xl '>
        {passed?(
          <p className='text-green-600'>Accepted</p>
        ):(
          <p className=' text-red-600'>
            Wrong Answer
          </p>
        )}
      </div>
          
        <div className='flex flex-col gap-4'>

          <div className='flex gap-7 h-10'>
            <div className=' w-24 text-center text-lg '>Your input</div>
            <div className=' bg-slate-200 w-5/6  items-center px-3 h-full overflow-y-auto overflow-x-hidden py-2'>
              {testcases?.map((val,idx)=>{
                
                return <div key={idx}>
                    {JSON.stringify(val)}
                </div>
              })}
          </div>
          </div>


          <div className='flex gap-7  h-10 '>
          <div className=' w-24 text-center text-lg'>Output</div>
            <div className=' bg-slate-200 w-5/6  items-center px-3 overflow-y-auto overflow-x-hidden py-2'>
              {
                 output.map((val,idx)=>{
                    return <div>{val}</div>
                 })
              }
            </div>
          </div>
          <div className='flex gap-7  h-10 '>
          <div className='w-24 text-center text-lg'>Expected</div>
            <div className=' bg-slate-200 w-5/6  items-center px-3 overflow-y-auto overflow-x-hidden py-2'>
              {
                     expected.map((val,idx)=>{
                      return <div>{val}</div>
                   })
              }
            </div>
          </div>

        </div>
     
    </div>
  )
}





function Console({show,output,setTestcases,testcases}) {

const display  = show?"flex":"hidden";

const [currBtn,setCurrBtn] = useState("output");




  return (
    <div className={`${display} `+'w-full bg-slate-300 h-1/3 flex flex-col'}>
      <div className=' h-1/6 bg-slate-500 w-full flex text-white'>
        <button className='w-1/2 text-center border-r-2 hover:bg-slate-400'
         onClick={()=>{
            setCurrBtn("input")
         }}
        >Input</button>
        <button className='w-1/2 text-center hover:bg-slate-400'
          onClick={()=>{
            setCurrBtn("output")
         }}
        >Output</button>
      </div>

      <div className='w-full h-4/5'>
      
       {
        currBtn === "input"?(
          <textarea className='h-full w-full' 
          onChange={(ev)=>{
            
             setTestcases(convertToTestcases(ev.target.value))
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
