import React from 'react'
import buttonStyle from './button.module.scss'

const Button = ({ children, className, onClick }) => {
  return (
    <div className={`${buttonStyle.button} ${className}`} onClick={onClick}> 
        <h4>{children}</h4>
    </div>
  )
}

export default Button