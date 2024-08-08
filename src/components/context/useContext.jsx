import { createContext, useContext, useState } from "react";

const AppContext = createContext()

const AppContextProvider = ({children})=>{
    const [toggle, setToggle] = useState(true);
    const [isDonationClick,setIsDonationClick]=useState(false)

    return(
        <AppContext.Provider value={{isDonationClick,setIsDonationClick,toggle, setToggle}}>
            {children}
        </AppContext.Provider>
    )
}

const useHOWContext=()=>useContext(AppContext)

export {AppContext,AppContextProvider,useHOWContext}