import React from 'react'
import buttonStyle from './button.module.scss'

const Button = ({ children }) => {
  return (
    <div className={buttonStyle.button}>
        <h4>{children}</h4>
    </div>
  )
}

export default Button