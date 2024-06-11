"use client"
import Button from "../Button"
import { useContext} from 'react';
import { AuthPageContext } from "@/app/ContextProviders";
import Link from "next/link";
import footerStyle from './footer.module.scss'


function Footer () {

    const {setDisplayAuthPage} = useContext(AuthPageContext)

  return (
    <div className={footerStyle.footer}>
        <div className={footerStyle.signupContainer}>
            <div className={footerStyle.footerSignup}>
                <span>
                    <h2>Sign up now to see our latest listings</h2>
                    <p>Create an account with us and find the fun.</p>
                </span>
                <Button onClick={() => setDisplayAuthPage('signup')}>Create account</Button>
            </div>
        </div>
        <div className={footerStyle.infoContainer}>
            <div className={footerStyle.info}>
                <div className={footerStyle.description}>
                    <p>Shopping items from different fields - from furnitures  to books and electronics. Sign up to see all the listings and find the best match for you.</p>
                    <p className={footerStyle.copyright}>© 2024 Shoplive</p>
                </div>
                <ul className={footerStyle.action}>
                    <li className={footerStyle.listHead}>Engage</li>
                    <li onClick={() => setDisplayAuthPage('signin')}>Sign in</li>
                    <li>
                        <Link href='/faq'>FAQ</Link> 
                    </li>
                    <li>
                        <Link href='/#about'>About Us</Link> 
                    </li>
                </ul>
                <ul className={footerStyle.action}>
                    <li className={footerStyle.listHead}>Earn Money</li>
                    <li>Affiliate</li>
                    <li>Become Partner</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer 