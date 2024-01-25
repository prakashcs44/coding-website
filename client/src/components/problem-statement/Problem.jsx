import React,{useEffect,useState} from 'react'

function Problem({problem}) {

  


  return (
    <div className='bg-white px-3 overflow-y-scroll overflow-x-hidden flex-1'
    
    >
        {/* problem header*/ }
      <div >
        <h1 className=' text-3xl'>{problem?.title}</h1>
        <div className='flex h-20 items-center gap-7 border-b-2'>
            <span className={`text-xl  ${problem?.difficulty==="Easy"?"text-green-600":problem?.difficulty==="Medium"?"text-orange-400":"text-red-500"}`}>{problem?.difficulty}</span>
            <span className='flex gap-2 items-center'>
              <div>
              <svg viewBox="0 0 24 24" width="1em" height="1em" class="icon__1Md2"><path fill-rule="evenodd" d="M7 19v-8H4v8h3zM7 9c0-.55.22-1.05.58-1.41L14.17 1l1.06 1.05c.27.27.44.65.44 1.06l-.03.32L14.69 8H21c1.1 0 2 .9 2 2v2c0 .26-.05.5-.14.73l-3.02 7.05C19.54 20.5 18.83 21 18 21H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h3zm2 0v10h9l3-7v-2h-9l1.34-5.34L9 9z"></path></svg>
              </div>
              <h4>{problem?.likes}</h4>
            </span>
            <span className='flex gap-2 items-center'>
            <div>
            <svg viewBox="0 0 24 24" width="1em" height="1em" class="icon__1Md2"><path fill-rule="evenodd" d="M17 3v12c0 .55-.22 1.05-.58 1.41L9.83 23l-1.06-1.05c-.27-.27-.44-.65-.44-1.06l.03-.32.95-4.57H3c-1.1 0-2-.9-2-2v-2c0-.26.05-.5.14-.73l3.02-7.05C4.46 3.5 5.17 3 6 3h11zm-2 12V5H6l-3 7v2h9l-1.34 5.34L15 15zm2-2h3V5h-3V3h3a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3v-2z"></path></svg>
            </div>
            <h4>{problem?.dislikes}</h4>
            </span>
        </div>
        </div>


           {/* problem statement*/ }
      <div>

        <h1 className=' text-lg  py-5'>
        {problem?.description}
        </h1>
      </div>
         {/* examples*/ }
      <div className=' my-5'>
      <div className=' py-7'>
        <h1 className='text-xl font-bold'>
            Example 1:
        </h1>
        <div className=' bg-slate-100 my-4'>
            <div className='font-semibold'>Input:</div>
            <div className='font-semibold'>Output:</div>
            <div className='font-semibold'>Explanation:</div>
        </div>

      </div>

      <div>
        <h1 className='text-xl font-bold'>
            Example 1:
        </h1>
        <div className=' bg-slate-100 my-4'>
            <div className='font-semibold'>Input:</div>
            <div className='font-semibold'>Output:</div>
            <div className='font-semibold'>Explanation:</div>
        </div>

      </div>
   

      </div>
         {/* constraints*/ }
      <div className=' my-12'>

        <h1 className='text-xl font-bold'>Constraints:</h1>
        <div className=' py-5'>
            <ul>
                <li >{"1 <= arr.length <= 3 * 104"}</li>
                <li>{"1 <= arr[i] <= 3 * 104"}</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Problem
