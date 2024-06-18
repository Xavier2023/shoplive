"use client"
import React, { useContext, useEffect } from 'react'
import errorStyle from './error.module.scss'
import { ErrorMessageContext } from '@/app/ContextProviders'

const ErrorMessage = () => {
    const {errorMessage, setErrorMessage} = useContext(ErrorMessageContext)

    useEffect(() => {
        if (errorMessage) {
            setTimeout (() => {
                setErrorMessage(null)
            }, 3000)
        }
    }, [errorMessage])

    if(!errorMessage) {
        return null
    }
  return (
    <div className={errorStyle.errorContainer}> 
        <h4>{errorMessage}</h4>
    </div>
  )
}

export default ErrorMessage