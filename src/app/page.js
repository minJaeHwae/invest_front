'use client'

import Header from '@/components/header/Header'
import styles from '../styles/pages/page.module.sass'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import TitleAnim from '@/components/titleAnim/TiltleAnim';
import TextAnim1 from '@/components/textAnim1/TextAnim1';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const videoRef = useRef()
  const overlayRef = useRef()

  useEffect(() => {
    if (videoRef && videoRef.current)
      videoRef.current.play()
  }, [videoRef])

  useEffect(() => {
    if (overlayRef && overlayRef.current)
      gsap.from(overlayRef.current, {
        scrollTrigger: {
          trigger: overlayRef.current,
          scrub: true,
          start: "center center",
          end: "bottom top",
          toggleActions: "resume reverse reverse none",
        },
        opacity: 0
      })
  }, [overlayRef])

  return (
    <main className={styles.main}>
      <section className={styles.banner}>
        <Header night={false} />
        <video ref={videoRef} loop muted>
          <source src="/videos/city-4.mp4" />
          Your browser does not support the video tag :/
        </video>
        <div className={styles.overlay} ref={overlayRef}></div>
        <div>
          <p>Scroll down</p>
          <div className='scroll-down'></div>
        </div>
      </section>
      
      <section className={styles.welcome}>
        <TextAnim1>
          <TitleAnim>
            Because <span>real estate</span> is future and we love <span>crypto</span> and need to write smth <span>interesting</span>
          </TitleAnim>
        </TextAnim1>
        <TextAnim1 _style={{
          display: 'flex',
          justifyContent: 'end',
        }}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dolorem eos ducimus at ipsam neque id consequatur, aliquid tempore nemo asperiores suscipit sunt distinctio sequi quidem numquam ratione quaerat quasi nulla sint placeat. Quo odio explicabo asperiores pariatur voluptatem consectetur veritatis unde nostrum aliquid commodi quas magni eveniet, laborum esse!</p>
        </TextAnim1>
      </section>

      <section className={styles.latest}>
        <h2>
          <span>Properties</span>
          LATEST LAUNCHES
        </h2>
      </section>
    </main>
  )
}
