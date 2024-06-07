"use client"
import { createContext, useState } from "react"


export const AuthPageContext = createContext()

const ContextProviders = ({ children }) => {
    const [displayAuthPage, setDisplayAuthPage] = useState(false)
  return (
    <AuthPageContext.Provider value={{displayAuthPage, setDisplayAuthPage}}>
        {children}
    </AuthPageContext.Provider>
  )
}

export default ContextProviders