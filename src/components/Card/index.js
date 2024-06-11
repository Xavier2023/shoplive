'use client'
import React from 'react'
import Image from 'next/image'
import cardStyle from './card.module.scss'
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { MdAutoDelete } from "react-icons/md";

const Card = ({ 
    title, 
    subtitle, 
    image, 
    onClick, 
    onClickIcon,
    isFavorite, 
    isDeleteable
}) => {

    const iconElement = isDeleteable ? (<MdAutoDelete className={cardStyle.icon} />) : isFavorite? (<FaHeart className={cardStyle.icon} />) : (<FaRegHeart className={cardStyle.icon} />) 
  return (
    <div className={cardStyle.cardContainer} onClick={onClick}>
        <Image
            className={cardStyle.image}
            src={image}
            alt={title}
            width={200}
            height={200}
        />
        <h2>{title }</h2>
        <p>$ {subtitle}</p>
        <span onClick={onClickIcon}>
            {iconElement}
        </span>
        
    </div>
  )
}

export default Card