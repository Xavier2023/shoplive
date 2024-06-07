import React from 'react'
import checkboxStyle from './checkbox.module.scss'

const Checkbox = ({ name, onChange, checked,  placeholder = 'Type here...' }) => {
  return (
    <div className={checkboxStyle.checkbox}>
        <input id={name} type="checkbox" name={name} placeholder={placeholder} onChange={(event) => onChange(name, event)} checked={checked} />
        <label htmlFor={name}>I agree with the terms & conditions</label>
    </div>
  )
}

export default Checkbox