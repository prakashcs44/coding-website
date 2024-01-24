import React,{useRef,useEffect} from 'react'

function ResizeBar({setWidth}) {
  const sliding = useRef(false);

  const mouseMove = (ev) => {
    if (!sliding.current) return;

    const totalWidth = window.innerWidth
    const mouseX = ev.clientX;
   
   
    if(((totalWidth-mouseX)/totalWidth)*100<30) return;
    if(((totalWidth-mouseX)/totalWidth)*100>99) return;


    const barWidth = 12;
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

 
  const mouseDown = (ev) => {
    ev.preventDefault();
    sliding.current = true;

  }



  const mouseUp = () => {
    sliding.current = false
  }



  return (
    <div className='h-screen  w-3 cursor-col-resize bg-slate-200 hover:bg-slate-300 transition-all'
     onMouseDown={mouseDown}
     onMouseUp={mouseUp}
   
    >
    </div>
  )
}

export default ResizeBar
