import React, { useEffect, useRef, useState } from 'react'
import { EditorContextProvider } from '../../contexts/codeeditorctx'
import CodeEditor from './CodeEditor'
import EditorSettings from './EditorSettings'
import ResizeBar from '../../ResizeBar'
function Editor() {

  const [width,setWidth] = useState("800px")
  const barRef = useRef();
  const slidingRef = useRef(false);
 

  const mouseMove = (ev) => {
    if (!slidingRef.current) return;

    const totalWidth = window.innerWidth
    const mouseX = ev.clientX;
   
   
    if(((totalWidth-mouseX)/totalWidth)*100<30) return;
    if(((totalWidth-mouseX)/totalWidth)*100>99) return;


    const barWidth = barRef.current.getBoundingClientRect().width;
    const newWidth = totalWidth-mouseX-barWidth;
    setWidth(newWidth+"px")
  }


  useEffect(() => {
    document.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseup", mouseUp);
    return () => {
      document.removeEventListener("mousemove", mouseMove);
      document.removeEventListener("mouseup", mouseUp);
    }
  }, [])

  useEffect(()=>{
    barRef.current.addEventListener("mousedown",mouseDown);
    barRef.current.addEventListener("mouseup",mouseUp);
  },[barRef])


  const mouseDown = (ev) => {
    ev.preventDefault();
    slidingRef.current = true;

  }

  const mouseUp = () => {
    slidingRef.current = false
  }





  return (
      <div className='flex mx-auto bg-white w-fit'
      >

       
          <ResizeBar forwardRef= {barRef}/>
       

     
        <EditorContextProvider>      
          <CodeEditor width = {width}/>
          <EditorSettings/>
    </EditorContextProvider>
      


      </div>
 
    
  )
}

export default Editor
