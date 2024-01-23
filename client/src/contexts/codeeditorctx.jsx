import { createContext,useState } from "react";

export const EditorContext = createContext([]);




 








export const EditorContextProvider = ({children})=>{
  
  const [settingDisplay,setSettingDisplay] = useState("hidden");
  const [theme,setTheme] = useState("light");
  const [fontSize,setFontSize] = useState(14);

  return (
    <EditorContext.Provider value={{
      settingDisplay,setSettingDisplay,
      theme,setTheme,
      fontSize,setFontSize

    }}>
        {children}
    </EditorContext.Provider>
  )
}