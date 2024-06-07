import React from 'react'
import buttonStyle from './button.module.scss'

const Button = ({ children, className }) => {
  return (
    <div className={`${buttonStyle.button} ${className}`}> 
        <h4>{children}</h4>
    </div>
  )
}

export default Button