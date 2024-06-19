import React from 'react'
import inputStyle from './input.module.scss'

const Input = ({ label, name, placeholder = 'Type here...', onChange, isTextarea, ...props }) => {
  return (
    <div className={inputStyle.input}>
        <label htmlFor={name}>{label}</label>
        {isTextarea? (
          <textarea 
            rows={7}
            id={name}
            name={name}
            placeholder={placeholder}
            onChange={(event) => onChange(name, event)}
            {...props}
          />
        ) : (
          <input 
            id={name}
            name={name}
            placeholder={placeholder}
            onChange={(event) => onChange(name, event)}
            {...props}
          /> 
        )}
    </div>
  )
}

export default Input