import React from 'react'
import buttonStyle from './button.module.scss'

const Button = ({ children, className, onClick, disabled }) => {
  return (
    <div className={`${buttonStyle.button} ${className} ${disabled? buttonStyle.disabled : null }`} onClick={onClick}> 
        <h4>{children}</h4>
    </div>
  )
}

export default Button