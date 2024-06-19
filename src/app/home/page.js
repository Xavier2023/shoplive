'use client'
import React, { useContext, useEffect, useState } from 'react'
import homeStyle from './homescreen.module.scss'
import Header from '@/components/Header'
import Tag from '@/components/Tag'
import Card from '@/components/Card'
import ProctectedRoute from '@/hoc/ProctectedRoute'
import { useRouter } from 'next/navigation'
import { getServices } from '@/http/services'
import { ErrorMessageContext, ServiceContext } from '../ContextProviders'
import { BASE_URL } from '@/http'

const tagArray = [
  {
    name: 'Chairs',
    key: 'chairs',
  },
  {
    name: 'Sofas',
    key: 'sofas',
  },
  {
    name: 'Lamps',
    key: 'lamps',
  },
]

const HomeScreen = () => {

  const router = useRouter()
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [filteredItems, setFilteredItems] = useState([])
  const {serviceData, setServiceData} = useContext(ServiceContext)
  const {setErrorMessage} = useContext(ErrorMessageContext)

  const getServicesData = async () => {
    try {
      const res = await getServices()
      setServiceData(res.data)
      
    } catch (error) {
      setErrorMessage('Failed to fetch services')
    }
  }

  useEffect(() => {
    getServicesData()
  }, [])

  useEffect(() => {
    if (selectedCategory) {
      const filtered = serviceData.filter(item => item?.category === selectedCategory)
     setFilteredItems(filtered)
    } else {
      setFilteredItems(serviceData)
    }
  }, [selectedCategory, serviceData])

  return (
    <div className={homeStyle.homeContainer}>
      <Header />
      <h2>Available Items</h2>
      <div className={homeStyle.tagRow}>
        <Tag
            onSelect={() => setSelectedCategory(null)}
            selected={!selectedCategory}
            name='All'
        />
        {tagArray.map((tag) => (
          <Tag
            key={tag.key}
            name={tag.name}
            onSelect={() => setSelectedCategory(tag.key)}
            selected={selectedCategory === tag.key}
          />
        ))}
      </div>
      <div className={homeStyle.cardRow}>
        {filteredItems.map((item) => (
          <Card 
            key={item._id}
            title={item.title}
            image={`${BASE_URL}/${item.image?.path}`}
            isFavorite={item.liked}
            subtitle={item.price}
            onClick={() => {
              router.push(`/services/${item?._id}`)
            }}
            onClickIcon={(e) => {
              e.stopPropagation()
              console.log('Icon clicked')
            }} 
          />
        ))}

        {!filteredItems?.length && (
          <p className={homeStyle.noItem}>No matches found</p>
        )}
      </div>
    </div>
  )
}

export default ProctectedRoute(HomeScreen)