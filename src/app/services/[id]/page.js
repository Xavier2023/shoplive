'use client'

import Header from '@/components/Header'
import React from 'react'
import serviceStyle from './service.module.scss'
import Image from 'next/image'
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { useParams } from 'next/navigation'
import ProctectedRoute from '@/hoc/ProctectedRoute'
import { data } from '@/app/home/data'

const ServiceDetails = () => {

  const { id } = useParams()

    const services = data.find(service => service?._id === id)
    const isFavorite = services?.liked
    const iconElement = isFavorite? (<FaHeart className={serviceStyle.icon} />) : (<FaRegHeart className={serviceStyle.icon} />)

    const onClickIcon = () => {
        console.log('icon clicked')
    }
  return (
    <div className={serviceStyle.serviceContainer}>
        <Header />
        <div className={serviceStyle.content}>
            <div className={serviceStyle.imageContainer}>
                <Image src={services.image} fill sizes='100vw' className={serviceStyle.image} />
            </div>
            <div className={serviceStyle.info}>
                <h3>{services.title}</h3>
                <h4>${services.price.toLocaleString('en-Us')}</h4>
                <p>{services.description}</p>
            </div>
            <span onClick={onClickIcon}>
                {iconElement}
            </span>
        </div>
    </div>
  )
}

export default ProctectedRoute(ServiceDetails)