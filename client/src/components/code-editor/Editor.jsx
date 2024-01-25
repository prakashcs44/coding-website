import React, { useEffect, useRef, useState } from 'react'
import { EditorContextProvider } from '../../contexts/codeeditorctx'
import CodeEditor from './CodeEditor'
import EditorSettings from './EditorSettings'
import ResizeBar from './ResizeBar'
function Editor({boilerPlateCode}) {

  const [width,setWidth] = useState("800px")
  
  return (
      <div className='flex mx-auto bg-white w-fit'
      >

       
          <ResizeBar setWidth={(width)=>setWidth(width)}/>
       
        <EditorContextProvider>      
          <CodeEditor width = {width} boilerPlateCode = {boilerPlateCode}/>
          <EditorSettings/>
    </EditorContextProvider>
      
      </div>
 
    
  )
}

export default Editor
