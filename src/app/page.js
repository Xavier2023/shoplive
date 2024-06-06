import Header from "../components/Header";
import Button from "../components/Button";
import Image from 'next/image'
import styles from "./page.module.scss";
import React from "react";

export default function Home() {

  const headerActions = [
    {
      title: 'About',
    },
    {
      title: 'Features',
    },
    {
      title: 'Pricing',
    },
    {
      title: 'Testimonials',
    }
  ]
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
  return (
    <main className={ styles.main}>
        <Header actions={headerActions} />
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
            />
          </div>
        </div>
        <div className={styles.highlights}>
          {highlights.map((highlight) => (
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
              <div className={styles.wall}/>
            </React.Fragment>
          ))}
        </div>
    </main>
  );
}
