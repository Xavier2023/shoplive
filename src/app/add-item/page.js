'use client'
import React, { useState } from 'react'
import addItemStyle from './addItem.module.scss'
import Header from '@/components/Header'
import { FaCirclePlus } from "react-icons/fa6";
import { IoIosCloseCircleOutline } from "react-icons/io"
import Input from '@/components/Input';
import Button from '@/components/Button';
import ProctectedRoute from '@/hoc/ProctectedRoute'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css'


const AddItem = () => {

  const [uploadedImage, setUploadedImage] = useState()
  const  [formData, setFormData] = useState({
    title: '',
    category: '',
    price: null,
    description: ''
  })

  const categories = [
    {
      value: 1,
      label: 'Chair',
    },
    {
      value: 2,
      label: 'Table',
    },
    {
      value: 3,
      label: 'Armchair',
    },
    {
      value: 4,
      label: 'Sofa',
    },
    {
      value: 5,
      label: 'Bed',
    },
  ]

  const onImageUpload = (e) => {
    setUploadedImage(e.target.files[0])
  }

  const handleChange = (key, event, selectedCategory) => {
    const { value } = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [key]: value,
        category: selectedCategory?.value
      }
    })
  }

  const onChange = (selectedCategory) => {
    setFormData(prevFormData => ({
        ...prevFormData,
        category: selectedCategory?.label
    }))
  }
  return (
      <div className={addItemStyle.addItemContainer}>
        <Header />
        <h1>Add new Item</h1>
        <div className={addItemStyle.addForm}>
          <div>
          <h4>Upload image</h4>
            {uploadedImage ? 
            (
              <div className={addItemStyle.image}>
                <img src={URL.createObjectURL(uploadedImage)} alt="uploaded image" />
                <IoIosCloseCircleOutline className={addItemStyle.deleteUpload} onClick={() => setUploadedImage(null)} />
              </div>
            ) : (
              <div className={addItemStyle.uploadContainer}>
                <div className={addItemStyle.customUpload}>
                  <FaCirclePlus className={addItemStyle.uploadIcon}/>
                  <input className={addItemStyle.uploadInput} type="file" name='image' onChange={onImageUpload}  />
                </div>
              </div>
            )}
          </div>
          <div className={addItemStyle.input}>
            <Input
              onChange={handleChange} 
              label='Title'
              name='title'
              placeholder='Item Title'
              value={formData.title}
            />
            <p>Category</p>
            <Dropdown 
              controlClassName={addItemStyle.dropdown} 
              arrowClassName={addItemStyle.dropdownArrow} placeholderClassName={addItemStyle.dropdownPlaceholder} options={categories} 
              onChange={onChange} value={formData.category} placeholder="Select a category" />
            <Input
              onChange={handleChange} 
              label='Price'
              name='price'
              type='number'
              placeholder='Enter Price in USD'
              value={formData.price}
            />
             <Input
              onChange={handleChange} 
              isTextarea={true}
              label='Description'
              name='description'
              placeholder='Tell us more'
              value={formData.description}
            />
            <Button className={addItemStyle.submitBtn}>Submit</Button>
          </div>
        </div>
        
      </div>
  )
}

export default AddItem