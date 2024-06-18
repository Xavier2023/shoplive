'use client'
import React, { useEffect, useState } from 'react'
import homeStyle from './homescreen.module.scss'
import Header from '@/components/Header'
import Tag from '@/components/Tag'
import { data } from './data'
import Card from '@/components/Card'
import ProctectedRoute from '@/hoc/ProctectedRoute'
import { useRouter } from 'next/navigation'

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

  useEffect(() => {
    if (selectedCategory) {
      const filtered = data.filter(item => item?.category === selectedCategory)
     setFilteredItems(filtered)
    } else {
      setFilteredItems(data)
    }
  }, [selectedCategory])

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
            image={item.image}
            isFavorite={item.liked}
            subtitle={item.price.toLocaleString('en-US')}
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