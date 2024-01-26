import React, { useState } from 'react'

function EditorSettings({setFontSize,setTheme,id}) {
   


  return (
    <div className={'w-1/3 absolute bg-slate-300 z-10  shadow-x'}  popover = "auto" id={id}>
        <div className=' h-14 flex justify-between px-5 items-center '>
        <h1 className='text-3xl'>Editor settings</h1>
        <button
        > 
        <svg viewBox="0 0 24 24" width="1.5em" height="1.5em" class="icon__1Md2 modal-close-btn__2d-I"><path fill-rule="evenodd" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>
        </button>
        </div>
     
      <div className='flex justify-between items-center px-5 h-32'>
        <div >
            <h3 className='text-2xl'>Font size</h3>
            <h4 className=' text-zinc-500'>Choose your preferred font size for the code editor</h4>
        </div>
        <select
        onChange={(ev)=>{
           setFontSize(ev.target.value)
        }}
        >
            <option value="14px">14px</option>
            <option value="15px">15px</option>
            <option value="16px">16px</option>
            <option value="18px">18px</option>
            <option value="20px">20px</option>
        </select>
      </div>
      <div className='flex justify-between items-center px-5 h-32'>
      <div >
            <h3 className='text-2xl'>Theme</h3>
            <h4 className=' text-zinc-500'>Tired of the white background? Try different styles and syntax highlighting.</h4>
        </div>
        <select
        onChange={(ev)=>{
           setTheme(ev.target.value)
        }}
        >
            <option value="light">light</option>
            <option value="vs-dark">dark</option>
           
        </select>
      </div>
    </div>
  )
}

export default EditorSettings
