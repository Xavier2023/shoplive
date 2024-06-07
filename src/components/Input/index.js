import React from 'react'
import inputStyle from './input.module.scss'

const Input = ({ label, name, placeholder = 'Type here...', onChange, ...props }) => {
  return (
    <div className={inputStyle.input}>
        <label htmlFor={name}>{label}</label>
        <input 
          id={name}
          name={name}
          placeholder={placeholder}
          onChange={(event) => onChange(name, event)}
          {...props}
        />
    </div>
  )
}

export default Input