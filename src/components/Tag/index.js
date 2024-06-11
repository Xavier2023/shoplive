'use client'
import React from 'react'
import tagStyle from './tag.module.scss'

const Tag = ({ selected, onSelect, name}) => {
  return (
    <div  className={`${tagStyle.tagContainer} ${selected ? tagStyle.selected : null} `} onClick={onSelect}>
        <p>{name}</p>
    </div>
  )
}

export default Tag