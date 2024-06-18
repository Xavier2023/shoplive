"use client"
import { useContext, useState } from "react"
import { AuthPageContext, ErrorMessageContext } from "@/app/ContextProviders"
import Input from "../Input"
import Checkbox from "../Checkbox"
import { IoIosCloseCircleOutline } from "react-icons/io"
import Button from "../Button"
import authpageStyle from './authPage.module.scss'
import { register, login, AUTH_TOKEN } from "@/http/auth"
import { useUser } from "@/custom hooks/useUser"

function AuthPage () {
  const {displayAuthPage, setDisplayAuthPage} = useContext(AuthPageContext)
  const {setErrorMessage} = useContext(ErrorMessageContext)
  const { authenticate } = useUser()
  const  [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    agreed: ''
  })
  const isLoginFormValid = !!formData.email && !!formData.password
  const isRegisterFormValid = !!formData.name && !!formData.email && !!formData.password

  const handleChange = (key, event) => {
    const { value, type, checked} = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [key]: type === 'checkbox' ? checked : value 
      }
    })
  }

  const handleSignup = async () => {
    try {
      const res = await register(formData)
      const token = res?.data?.token
      authenticate(token)
    } catch (error) {
        const err = error?.response?.data?.message || 'Something went wrong'
        setErrorMessage(err)
    }
    setDisplayAuthPage(null)
  }

  const handleLogin = async () => {
    try {
      const res = await login(formData)
      const token = res?.data?.token
      authenticate(token)
    } catch (error) {
      const err = error?.response?.data?.message || 'Something went wrong'
      setErrorMessage(err)
    }
    setDisplayAuthPage(null)
  }


  const authPageContent = {
    signin: {
      title: 'Sign in',
      content: (
        <div>
          <form>
            <Input 
              onChange={handleChange} 
              name='email' 
              type='email' 
              label='Email' 
              placeholder="Email.." 
              value={formData.email}
            />
            <Input 
              onChange={handleChange} 
              name='password' 
              type='password' 
              label='Password' 
              placeholder="Password.."
              value={formData.password}
            />
            <Button disabled={!isLoginFormValid} className={authpageStyle.button} onClick={handleLogin}>Sign In</Button>
          </form>
          <p>Don’t have an account? <span onClick={() => setDisplayAuthPage(prevstate => prevstate = 'signup')}>Create an account.</span></p>
        </div>
      )
      
    },
    signup: {
      title: 'Create an account',
      content: (
        <div>
          <form>
            <Input 
              onChange={handleChange} 
              name='name' 
              type='text' 
              label='Name' 
              placeholder="Enter name here"
              value={formData.name}
            />
            <Input 
              onChange={handleChange} 
              name='email' 
              type='email' 
              label='Email' 
              placeholder="Enter email here" 
              value={formData.email}
            />
            <Input 
              onChange={handleChange} 
              name='password' 
              type='password' 
              label='Password' 
              placeholder="Enter password"
              value={formData.password}
            />
            <Checkbox 
            onChange={handleChange} 
            name='agreed' 
            checked={formData.agreed}
          />
            <Button disabled={!formData.agreed || !isRegisterFormValid} onClick={handleSignup} className={authpageStyle.button}>Create account</Button>
          </form>
          <p>Already have an account? <span onClick={() => setDisplayAuthPage(prevstate => prevstate = 'signin')} >Sign in.</span></p>
        </div>

      )
    }
  }
  
  return (
    <>
      {displayAuthPage && (
        <div className={authpageStyle.authpageContainer}>
          <div className={authpageStyle.authpageContent}>
              <IoIosCloseCircleOutline className={authpageStyle.close} onClick={() => {
                setDisplayAuthPage(null)
                setFormData({})
              }} 
            />
              <h2>{authPageContent[displayAuthPage]?.title}</h2>

                {authPageContent[displayAuthPage]?.content}
             
          </div>
        </div>
      )}
    </>
  )
}

export default AuthPage 