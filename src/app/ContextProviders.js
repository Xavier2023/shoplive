"use client"
import { setupHttp } from "@/http"
import { createContext, useEffect, useState } from "react"


export const AuthPageContext = createContext()
export const ErrorMessageContext = createContext()
export const UserContext = createContext()

const ContextProviders = ({ children }) => {
    const [displayAuthPage, setDisplayAuthPage] = useState(null)
    const [errorMessage, setErrorMessage] = useState('')
    const [authenticated, setAuthenticated] = useState(null)

    useEffect(() => {
      setupHttp()
    }, [authenticated])

  return (
    <AuthPageContext.Provider value={{displayAuthPage, setDisplayAuthPage}}>
      <ErrorMessageContext.Provider value={{errorMessage, setErrorMessage}}>
      <UserContext.Provider value={{authenticated, setAuthenticated}}>
          {children}
      </UserContext.Provider>
      </ErrorMessageContext.Provider>
    </AuthPageContext.Provider>
  )
}

export default ContextProviders