import { useEffect, useRef } from 'react';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function TextAnim1({
  delay = 0,
  duration = 1,
  _style = {},
  children
}) {
  const innerRef = useRef();

  useEffect(() => {
    if (innerRef && innerRef.current) {
      const el = innerRef.current
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          toggleActions: "resume pause none none",
        },
        opacity: 0,
        yPercent: 100,
        duration: duration,
        delay: delay,
        ease: "power2.out"
      })
    }
  }, [innerRef])

  return (
    <div style={{
      overflow: 'hidden',
    }}>
      <div ref={innerRef} style={_style}>
        {children}
      </div>
    </div>
  );
}

export default TextAnim1;