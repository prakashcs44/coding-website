import React from 'react'

function ResizeBar({forwardRef}) {
  return (
    <div className='h-screen  w-3 cursor-col-resize bg-slate-200 hover:bg-slate-600'
     ref={forwardRef}
    >
     <span></span><span></span><span></span><span></span>
    </div>
  )
}

export default ResizeBar
