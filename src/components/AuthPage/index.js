"use client"
import { useContext, useState } from "react"
import { AuthPageContext } from "@/app/ContextProviders"
import Input from "../Input"
import Checkbox from "../Checkbox"
import { IoIosCloseCircleOutline } from "react-icons/io"
import Button from "../Button"
import authpageStyle from './authPage.module.scss'

function AuthPage () {
  const {displayAuthPage, setDisplayAuthPage} = useContext(AuthPageContext)
  const  [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    agreed: ''
  })

  const handleChange = (key, event) => {
    const { value, type, checked} = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [key]: type === 'checkbox' ? checked : value 
      }
    })
  }
  console.log(formData)


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
            <Button className={authpageStyle.button}>Sign In</Button>
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
            <Button className={authpageStyle.button}>Sign up</Button>
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
            <IoIosCloseCircleOutline className={authpageStyle.close} onClick={() => setDisplayAuthPage(null)} />
              <h2>{authPageContent[displayAuthPage]?.title}</h2>

                {authPageContent[displayAuthPage]?.content}
             
          </div>
        </div>
      )}
    </>
  )
}

export default AuthPage 