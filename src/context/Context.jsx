import { createContext, useState } from "react";
import runChat from "../config/gemini";

export const Context = createContext()

const ContextProvider = ( {children} ) => {
  

  const [input,setInput] = useState("")
  const [recentPrompt,setRecentPrompt] = useState("")
  const [prevPrompta,setPrevPrompta] = useState([])
  const [showResult,setShowResult] = useState(false)
  const [loading,setLoading] = useState(false)
  const [resultData,setResultData] = useState("")

  const daleyPara = (index,nextWord) => {
    setTimeout( function () {
      setResultData( prev => prev + nextWord );
    },75*index)
  }

  const onSend = async ( prompt ) => {
    setResultData("")
    setLoading(true)
    setShowResult( true )
    setRecentPrompt( input )
    setPrevPrompta(prev=>[...prev,input])
    const response  = await runChat(input)
    let responseArray = response.split("**")
    let newResponse ="";
    for ( let i = 0; i < responseArray.length; i++ ){
      if (i === 0 || i%2 !== 1) {
        newResponse += responseArray[ i ];
      } else {
        newResponse+="<b>" + responseArray[i]+"</b>"
      }
    } 
    let newResponse2 = newResponse.split("*").join("</br>")
    let newResponseArray = newResponse2.split( " " );
    for ( let i = 0; i < newResponseArray.length; i++ ){
      const nextWord = newResponseArray[ i ];
      daleyPara(i,nextWord + " ")
    }
    setLoading( false ) 
    setInput("")

  }

  const contextValue = {  
    prevPrompta,
    setPrevPrompta,
    onSend,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
  }
  return (
    <Context.Provider value={contextValue}>
    {children}
    </Context.Provider>
  )
};
export default ContextProvider;