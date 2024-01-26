import React, { useEffect, useState } from 'react'
import { Editor } from '@monaco-editor/react'
import { BeatLoader } from 'react-spinners';
import Console from './Console';
import EditorSettings from './EditorSettings';
import ResizeBar from "./ResizeBar"


const initialTestcases = "[1,2,3]\n[0,-1,4]\n[2]"

function CodeEditor({ boilerPlateCode }) {
  console.log(boilerPlateCode)
  const [width, setWidth] = useState("800px");
  const [code, setCode] = useState(boilerPlateCode)
  const [output, setOutput] = useState({})
  const [fontSize, setFontSize] = useState("14px");
  const [theme, setTheme] = useState("light");
  const [resultLoading, setResultLoading] = useState(false);
  const [consoleDisplay, setConsoleDisplay] = useState(false)
  const [testcases, setTestcases] = useState(initialTestcases);



   useEffect(()=>{
    setCode(boilerPlateCode)
   },[boilerPlateCode])



  const editorHeight = consoleDisplay ? "35%" : "82%";
  const consoleHeight = "47%";



  const submitCode = async () => {
    setResultLoading(true)
    const response = await fetch("http://localhost:3000/runcode", {
      method: "POST",
      body: JSON.stringify({ code, testcases }),
      headers: {
        "Content-Type": "application/json"
      }
    })

    const responeJson = await response.json();

    setOutput(responeJson)
    setResultLoading(false)
    setConsoleDisplay(true);


  }


  const resetCode = () => {
    setCode(boilerPlateCode);
  }





  const editorOptions = {
    fontSize: parseInt(fontSize)
  }



  const toggleConsole = () => {
    setConsoleDisplay(prev => !prev);
  }


  return (
    <div className='flex'>
      <ResizeBar setWidth={(width) => setWidth(width)} />
      <div className='h-screen '
        style={{ width }}
      >

        {/*top bar*/}
        <div className=' bg-slate-100 flex items-center px-5 justify-between'
          style={{ height: "8%" }}
        >
          <select className=' h-2/3 w-32'>
            <option value="c++">c++</option>
            <option value="jav">java</option>
            <option value="python">python</option>
          </select>
          <div className="flex gap-5">
            <button id="reset-code"
              onClick={() => resetCode()}
            >
              <svg viewBox="0 0 24 24" width="1em" height="1em" class="icon__1Md2"><path fill-rule="evenodd" d="M14 8H3l7-5v3h4a7 7 0 0 1 0 14h-4a7 7 0 0 1-7-7v-1h2v1a5 5 0 0 0 5 5h4a5 5 0 0 0 0-10z"></path></svg>
            </button>

            <button
              popovertarget="editor-settings"
            >
              <svg viewBox="0 0 24 24" width="1em" height="1em" class="icon__1Md2"><path fill-rule="evenodd" d="M14.895 2c-.69.734-1.724 1.212-2.896 1.212-1.17 0-2.203-.478-2.894-1.212-.279.084-3.866 2.176-4.146 2.449.275.975.163 2.124-.42 3.157-.586 1.033-1.505 1.706-2.472 1.949-.09.383-.09 4.507 0 4.89.967.243 1.887.916 2.471 1.949.585 1.033.697 2.182.42 3.157.28.273 3.868 2.365 4.146 2.449.69-.734 1.725-1.212 2.895-1.212 1.172 0 2.206.478 2.897 1.212.278-.084 3.864-2.176 4.145-2.449-.276-.975-.164-2.124.42-3.157.585-1.033 1.505-1.706 2.472-1.949.09-.383.09-4.507 0-4.89-.967-.243-1.886-.916-2.471-1.949-.584-1.033-.696-2.182-.42-3.157-.28-.273-3.868-2.365-4.147-2.449m.195 2.39c.556.318 1.23.714 1.765 1.038a6.275 6.275 0 0 0 .817 3.147 6.215 6.215 0 0 0 2.276 2.314c.01.679.01 1.543 0 2.222a6.208 6.208 0 0 0-2.276 2.314 6.277 6.277 0 0 0-.818 3.148c-.535.323-1.207.718-1.763 1.037a6.175 6.175 0 0 0-3.092-.822c-1.103 0-2.172.29-3.09.822a91.762 91.762 0 0 1-1.763-1.037 6.277 6.277 0 0 0-.818-3.148 6.215 6.215 0 0 0-2.276-2.314 80.47 80.47 0 0 1 0-2.222 6.213 6.213 0 0 0 2.275-2.314c.552-.975.83-2.069.818-3.147.536-.324 1.209-.72 1.764-1.038a6.184 6.184 0 0 0 3.09.822 6.178 6.178 0 0 0 3.09-.822M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path></svg>
            </button>
            <EditorSettings setFontSize={(fontSize) => { setFontSize(fontSize) }}

              setTheme={(theme) => { setTheme(theme) }}
              id="editor-settings"
            />

          </div>
          {/*mid*/}
        </div>
        <div style={{ height: editorHeight }} className='resize-y flex-grow-0 flex-shrink'>
          <Editor
            options={editorOptions}
            value={code}
            height="100%" width="100%" theme={theme} defaultLanguage='cpp'
            onChange={(code) => setCode(code)}

          /></div>
        {/* bottom */}
        <Console show={consoleDisplay} output={output}
          setTestcases={(ts) => setTestcases(ts)}
          testcases={testcases}
          height={consoleHeight}
        />
        <div style={{ height: "10%" }}>

          <div className='w-full h-full flex justify-end items-center gap-16 bg-slate-100 px-10 relative'>
            <button className=' w-32 bg-green-600 rounded-lg h-2/3 hover:bg-green-500 transition-all'
              onClick={() => {
                toggleConsole()
              }}
            >

              Console
            </button>
            <button className=' w-32 bg-white rounded-lg h-2/3 border-2 hover:bg-slate-100 transition-all'
              onClick={() => submitCode()}
            >
              {!resultLoading ? ("Run code") : (<BeatLoader loading={true} />)}
            </button>
            <button className=' w-32 bg-slate-600 rounded-lg h-2/3 text-white hover:bg-slate-500 transition-all' >
              Submit
            </button>


          </div>
        </div>

      </div>

    </div>
  )
}

export default CodeEditor
