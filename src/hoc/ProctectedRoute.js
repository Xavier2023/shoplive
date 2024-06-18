'use client'
import { useUser } from '@/custom hooks/useUser'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const ProctectedRoute = (WrappedComponent) => {
    const ProctectedRouteComponent = () => {
        const router = useRouter()
        const { authenticated } = useUser()
    
        useEffect(() => {
            if (authenticated === false) {
                router.push('/')
            }
        }, [authenticated])

        if (authenticated === null) {
            return <p>Loading...</p>
        }

        if (authenticated === true) {
            return (
              <WrappedComponent />
            )
        }

        return <p>Access denied</p>

    }

    return ProctectedRouteComponent
}

export default ProctectedRoute