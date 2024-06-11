import React from 'react'
import faqStyle from './faq.module.scss'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const FAQ = () => {
  return (
    <div>
      <div className={faqStyle.faqContainer}>
          <Header />
          <h1>FAQ</h1>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, error?</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum nesciunt quas amet ipsum placeat libero maiores animi nostrum et rem.</p>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, error?</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum nesciunt quas amet ipsum placeat libero maiores animi nostrum et rem.</p>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, error?</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum nesciunt quas amet ipsum placeat libero maiores animi nostrum et rem.</p>
      </div> 
      <Footer />  
    </div>
  )
}

export default FAQ