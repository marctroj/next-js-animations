"use client";
import { React, useEffect } from 'react'
import styles from '../styles/AnimationTwo.module.scss'
import SplitText from './SplitText';

const AnimationTwo = () => {
  const subTitle = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do consectetur adipiscing elit, sed do.';

  SplitText(styles.subtitle);

  useEffect(() => {
    const words = document.querySelectorAll('.char');
    words.forEach((word) => {
      console.log(word);
    })
  }, [])

  return (
    <div className={styles.main__wrapper}>
      <div className={styles.mask}>
        <p className={styles.subtitle}>{ subTitle }</p>
      </div>
    </div>
  )
}

export default AnimationTwo