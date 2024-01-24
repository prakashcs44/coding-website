import React, { useEffect, useRef, useState } from 'react'
import { EditorContextProvider } from '../../contexts/codeeditorctx'
import CodeEditor from './CodeEditor'
import EditorSettings from './EditorSettings'
import ResizeBar from './ResizeBar'
function Editor() {

  const [width,setWidth] = useState("800px")
  
  return (
      <div className='flex mx-auto bg-white w-fit'
      >

       
          <ResizeBar setWidth={(width)=>setWidth(width)}/>
       
        <EditorContextProvider>      
          <CodeEditor width = {width}/>
          <EditorSettings/>
    </EditorContextProvider>
      
      </div>
 
    
  )
}

export default Editor
