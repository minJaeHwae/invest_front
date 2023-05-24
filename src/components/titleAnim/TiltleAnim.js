import styles from './TiltleAnim.module.sass'
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

function TitleAnim({ children }) {
  const elRef = useRef()

  useEffect(() => {
    if (elRef && elRef.current) {
      elRef.current.querySelectorAll("span").forEach((span, i) => {
        gsap.from(span, {
          scrollTrigger: {
            trigger: elRef.current,
            start: "top bottom",
            toggleActions: "resume reverse reverse none",
          },
          opacity: 0,
          delay: 1 + i
        })
      });
    }
  }, [elRef])
  

  return (
    <h1 className={styles.title} ref={elRef}>{children}</h1>
  );
}

export default TitleAnim;