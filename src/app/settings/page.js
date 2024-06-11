import React from 'react'
import settingStyle from './setting.module.scss'
import Header from '@/components/Header'
import Button from '@/components/Button'
import { IoIosArrowForward } from "react-icons/io";
import Link from 'next/link';

const links = [
  {
    name: 'My Items',
    route: '/home'
  },
  {
    name: 'Contact Us',
    route: '#'
  },
  {
    name: 'Privacy Policy',
    route: '#'
  },
  {
    name: 'Terms & Conditions',
    route: '#'
  },
]

const Settings = () => {
  return (
    <>
      <div className={settingStyle.settingContainer}>
          <Header />
          <h2 className={settingStyle.h2}>Settings</h2>
          <p className={settingStyle.linkHeader}>Helpful Links</p>
          
            {links.map((link) => (
            <Link href={link.route} className={settingStyle.link}>
                <p>{link.name}</p>
                <IoIosArrowForward />
            </Link>
            ))}
            
          <Button className={settingStyle.btn}>Log out</Button>
      </div> 
    </>
  )
}

export default Settings