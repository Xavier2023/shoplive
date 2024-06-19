"use client"
import { setupHttp } from "@/http"
import { createContext, useEffect, useState } from "react"


export const AuthPageContext = createContext()
export const ErrorMessageContext = createContext()
export const UserContext = createContext()
export const ServiceContext = createContext()

const ContextProviders = ({ children }) => {
    const [displayAuthPage, setDisplayAuthPage] = useState(null)
    const [errorMessage, setErrorMessage] = useState('')
    const [authenticated, setAuthenticated] = useState(null)
    const [serviceData, setServiceData] = useState([])

    useEffect(() => {
      setupHttp()
    }, [authenticated])

  return (
    <AuthPageContext.Provider value={{displayAuthPage, setDisplayAuthPage}}>
      <ErrorMessageContext.Provider value={{errorMessage, setErrorMessage}}>
      <UserContext.Provider value={{authenticated, setAuthenticated}}>
      <ServiceContext.Provider value={{serviceData, setServiceData}}>
          {children}
      </ServiceContext.Provider>
      </UserContext.Provider>
      </ErrorMessageContext.Provider>
    </AuthPageContext.Provider>
  )
}

export default ContextProviders