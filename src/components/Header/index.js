"use client"
import Image from 'next/image'
import { AuthPageContext } from '@/app/ContextProviders';
import { IoMenu } from "react-icons/io5";
import HeaderStyle from './header.module.scss'
import { useContext, useState } from 'react';

const Header = ({ actions }) => {

    const [showMenu, setShowMenu] = useState('')

    const {setDisplayAuthPage} = useContext(AuthPageContext)


    const onMenuClick = () => {
        setShowMenu(prevState => !prevState)
    }

  return (
    <div className={HeaderStyle.header}>
        <div className={HeaderStyle.logoContainer}>
            <Image 
                src='/logo.png'
                width={40}
                height={40}
                alt='Shoplive logo'
            />
            <h2>Shoplive</h2>
        </div>
        <IoMenu onClick={onMenuClick} className={HeaderStyle.menu} />
        <div className={HeaderStyle.actionsContainer}>
            {actions.map((action) => (
                <h3 key={action.title} className={HeaderStyle.actions}>{action.title}</h3>
            ))}
        </div>
        <div className={HeaderStyle.cta}>
            <h3 onClick={() => setDisplayAuthPage('signin')}>Sign in</h3>
            <span onClick={() => setDisplayAuthPage('signup')}>
                <h3>Create an account</h3>
            </span>
        </div>

        {showMenu && (
            <div className={HeaderStyle.mobile}>
                <div className={HeaderStyle.mobileAction}>
                    {actions.map((action) => (
                        <h3 key={action.title} >{action.title}</h3>
                    ))}
                </div>
                <div className={HeaderStyle.mobileCta}>
                    <h3 onClick={() => setDisplayAuthPage('signin')}>Sign in</h3>
                    <button className={HeaderStyle.btn} onClick={() => setDisplayAuthPage('signup')}>Create an account</button>
                </div>
            </div>
        )}
    </div>
  )
}

export default Header