"use client"
import Image from 'next/image'
import { AuthPageContext } from '@/app/ContextProviders';
import { IoMenu } from "react-icons/io5";
import HeaderStyle from './header.module.scss'
import { useContext, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useUser } from '@/custom hooks/useUser';


const Header = () => {

    const { authenticated } = useUser()
    const [showMenu, setShowMenu] = useState('')
    const {setDisplayAuthPage} = useContext(AuthPageContext)
    const path = usePathname()

    const onMenuClick = () => {
        setShowMenu(prevState => !prevState)
    }

    const headerActions = authenticated ? [
            {
                title: 'Home',
                route: '/home'
            },
            {
                title: 'Favorites',
                route: '/favourites'
            },
            {
                title: 'Settings',
                route: '/settings'
            }
      ] : [
            {
                title: 'About',
                route: '/#about'
            },
            {
                title: 'FQA',
                route: '/faq'
            }
        ]

  return (
    <div className={HeaderStyle.header}>
        <Link href='/'>
            <div className={HeaderStyle.logoContainer}>
                <Image 
                    src='/logo.png'
                    width={40}
                    height={40}
                    alt='Shoplive logo'
                />
                <h2>Shoplive</h2>
            </div>
        </Link>
        <IoMenu onClick={onMenuClick} className={HeaderStyle.menu} />
        <div className={HeaderStyle.actionsContainer}>
            {headerActions.map((action) => (
                <Link href={action.route} key={action.title}>
                    <h3 className={`${HeaderStyle.actions} ${path === action.route ? HeaderStyle.active : null }`}>{action.title}</h3>
                </Link>
            ))}
        </div>
        {authenticated ? (
            <div className={HeaderStyle.cta}>
                <span>
                    <Link href='/add-item'>
                        <h3>Add new item</h3>
                    </Link>
                </span>
            </div>
        ) : (
            <div className={HeaderStyle.cta}>
                <h3 onClick={() => setDisplayAuthPage('signin')}>Sign in</h3>
                <span onClick={() => setDisplayAuthPage('signup')}>
                    <h3>Create an account</h3>
                </span>
            </div>
        )}
        

        {showMenu && (
            <div className={HeaderStyle.mobile}>
                <div className={HeaderStyle.mobileAction}>
                    {headerActions.map((action) => (
                        <h3 key={action.title} > <Link href={action.route}>{action.title}</Link></h3>
                    ))}
                </div>
                {!authenticated ? (
                    <div className={HeaderStyle.mobileCta}>
                        <h3 onClick={() => setDisplayAuthPage('signin')}>Sign in</h3>
                        <button className={HeaderStyle.btn} onClick={() => setDisplayAuthPage('signup')}>Create an account</button>
                </div>
                ) : (
                    <div className={HeaderStyle.mobileCta}>
                        <Link href='/add-item'>
                            <button className={HeaderStyle.btn} >Add new item</button>
                        </Link>
                    </div>
                )}
            </div>
        )}
    </div>
  )
}

export default Header