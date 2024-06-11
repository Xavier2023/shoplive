'use client'
import Header from "../components/Header";
import Button from "../components/Button";
import Footer from "@/components/Footer";
import Image from 'next/image'
import styles from "./page.module.scss";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";


const highlights = [
  {
    title: '500+',
    subtitle: 'Shoping Items',
    icon: '/listing.png'
  },
  {
    title: '100+',
    subtitle: 'Users',
    icon: '/user.png'
  },
  {
    title: '30+',
    subtitle: 'Servers',
    icon: '/server.png'
  },
]

export default function Home() {

  const isAuthenticated = true
  const router = useRouter()

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/home')
    }
  }, [])
  
  return (
    <div className={ styles.main}>
        <Header />
        <div className={styles.banner}>
          <div className={styles.bannerText}>
            <h1>Find <b>all you need</b> in <b>Shoplive</b> platform</h1>
            <p>Shopping items from different fields - from furnitures to books and electronics. Sign up to see all the listings and find the best match for you.</p>
            <Button>Get Started</Button>
          </div>
          <div className={styles.bannerImage}>
            <Image 
              className={styles.image}
              src='/landing-Illustration.png' 
              alt="Banner illustration"
              fill
              sizes="100vw"
              priority
            />
          </div>
        </div>
        <div className={styles.highlights} id="about">
          {highlights.map((highlight, index) => (
            <React.Fragment key={highlight.title}>
              <div className={styles.highlight} >
                <span>
                  <Image
                    className={styles.icon}
                    src={highlight.icon}
                    width={24}
                    height={24}
                    alt={highlight.subtitle}
                  />
                </span>
                <div>
                  <h3>{highlight.title}</h3>
                  <p>{highlight.subtitle}</p>
                </div>
              </div>
              {index < highlights.length - 1 && <div className={styles.wall}/>}

            </React.Fragment>
          ))}
        </div>
        <div className={styles.worldMap}>
          <h2>Our awesome apps <br /> are loved worldwide</h2>
          <p>We care about your users and we always pay huge attention to create a <br /> product that people <b>love</b> to use every day.</p>
          <div className={styles.mapImage}>
            <Image
              className={styles.map}
              src='/map-illustration.png'
              // width={1008}
              // height={512}
              alt='world map'
              fill
              sizes="100vw"
              priority={false}
            />
          </div>
        </div>
        <Footer />
    </div>
  );
}
