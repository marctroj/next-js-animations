"use client";
import { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import styles from '../styles/AnimationOne.module.scss'

gsap.registerPlugin(ScrollTrigger);

const AnimationOne = () => {
  const titleRef = useRef(null);

  // useEffect(() => {
  //   gsap.to(titleRef.current, {
  //     opacity: 1,
  //     duration: 3,
  //   })
  // }, [])

  return (
    <main className={styles.main__wrapper}>
      <div className={styles.mask}>
        <h1 ref={titleRef} className={styles.title}>ANIMATION ONE</h1>
      </div>
    </main>
  )
}

export default AnimationOne