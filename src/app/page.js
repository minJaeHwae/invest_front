'use client'

import Header from '@/components/header/Header'
import styles from '../styles/pages/page.module.sass'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import TitleAnim from '@/components/titleAnim/TiltleAnim';
import TextAnim1 from '@/components/textAnim1/TextAnim1';
import Link from 'next/link';
import data from '../../data/data.json';
import LatestCard from '@/components/latestCard/LatestCard';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import CommunityCard from '@/components/communityCard/CommunityCard';
import { HiArrowSmallLeft, HiArrowSmallRight } from 'react-icons/hi2'
import { FaEthereum, FaMicroscope } from 'react-icons/fa'
import { RiLightbulbFlashFill } from 'react-icons/ri'
import { MdOutlineSecurity } from 'react-icons/md'


gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const videoRef = useRef()
  const overlayRef = useRef()
  const latestsRef = useRef()
  const latestsPinnedRef = useRef()

  const [swiper, setSwiper] = useState();

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

  useEffect(() => {
    if (latestsPinnedRef && latestsPinnedRef.current && latestsRef && latestsRef.current)
      ScrollTrigger.create({
        trigger: latestsRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: latestsPinnedRef.current
      })
  }, [latestsPinnedRef, latestsRef])

  useEffect(() => {
    gsap.utils.toArray(".value-anim").forEach((value, i) => {
      gsap.from(value, {
        scrollTrigger: {
          trigger: value
        },
        yPercent: 30,
        opacity: 0,
        delay: .2 * i,
        ease: "none"
      })
    });
  }, [])
  

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

      <section className={styles.latests} ref={latestsRef}>
        <div ref={latestsPinnedRef} style={{ zIndex: -1 }}>
          <h2>
            <span>Properties</span>
            <span>LATEST LAUNCHES</span>
          </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quae molestiae ea, placeat eum animi nemo nesciunt dicta tenetur perferendis.</p>
          <Link className='btn' href="/">PROPERTIES</Link>
        </div>
        <div>
          <div>
            {
              data.latests.map((latest, i) => i % 2 == 0 && <LatestCard 
                key={latest.id} 
                title={latest.title}  
                src={latest.src}
                big={latest.big}
              />)
            }
          </div>
          <div>
            {
              data.latests.map((latest, i) => i % 2 == 1 && <LatestCard 
                key={latest.id} 
                title={latest.title}  
                src={latest.src}
                big={latest.big}
              />)
            }
          </div>
        </div>
      </section>
      
      <section className={styles.communities}>
        <div>
          <div>
            <button onClick={() => { swiper?.slidePrev() }}>
              <HiArrowSmallLeft />
            </button>
            <button onClick={() => { swiper?.slideNext() }}>
              <HiArrowSmallRight />
            </button>
          </div>
          <h2 className='reverse'>
            <span>Communities</span>
            <span>FEATURED COMMUNITIES</span>
          </h2>
        </div>
        <div>
          <Swiper
            spaceBetween={30}
            slidesPerView={4}
            onSwiper={(swiper) => setSwiper(swiper)}
            style={{ height: "100%" }}
          >
            {
              data.communities.map(community => 
                <SwiperSlide key={community.id}>
                  <CommunityCard  community={community} />
                </SwiperSlide>
                )
            }
          </Swiper>
        </div>
      </section>

      <section className={styles.values}>
        <h2>
          <span>Actions</span>
          <span>OUR VALUES</span>
        </h2>
        <div>
          <div className='value-anim'>
            <h3>Innovation</h3>
            <p>Embrace cutting-edge technology and digital solutions to revolutionize the real estate industry and provide innovative services to clients.</p>
            <RiLightbulbFlashFill />
          </div>
          <div className='value-anim'>
            <h3>Transparency</h3>
            <p>Foster a culture of openness and transparency, ensuring clear and honest communication with clients, investors, and stakeholders.</p>
            <FaMicroscope />
          </div>
          <div className='value-anim'>
            <h3>Accessibility</h3>
            <p>Strive to make real estate investments more accessible to a wider audience, leveraging cryptocurrencies and blockchain to reduce barriers to entry.</p>
            <FaEthereum />
          </div>
          <div className='value-anim'>
            <h3>Security</h3>
            <p>Prioritize the security and privacy of client information and transactions, leveraging blockchain technology and robust cybersecurity measures.</p>
            <MdOutlineSecurity />
          </div>
        </div>
      </section>

      <section className={styles.invest}>
        <h2>
          <span>Start now</span>
          <span>INVEST</span>
        </h2>
      </section>

      <svg width={0} height={0}>
        <defs>
          <linearGradient id="linearColors" x1={1} y1={0} x2={1} y2={1}>
            <stop offset={0} stopColor="rgba(33,168,255,1)" />
            <stop offset={1} stopColor="rgba(255,12,225,1)" />
          </linearGradient>
        </defs>
      </svg>
    </main>
  )
}
