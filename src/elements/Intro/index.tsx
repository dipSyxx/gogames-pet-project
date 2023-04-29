import React from 'react'
import styles from './introStyles.module.sass'
import { Typography } from '../Typography'
import { Button } from '../Button'

export const Intro = () => {
  return (
    <>
      <div className={styles.block_intro} id="home">
        <div className={styles.intro}>
          <img className={styles.images_X1} src="/intro/X1.png" alt="X1" />
          <div className={styles.container}>
            <div className={styles.intro_inner}>
              <div className={styles.inner_content}>
                <img className={styles.images_X2} src="/intro/X2.png" alt="X2" />
                <div className={styles.content_topTitle}>
                  <Typography variant="h2" component="h2">
                    Gaming Consoles
                  </Typography>

                  <img src="/intro/arrows.png" alt="arrows" />
                  <img src="/intro/arrows.png" alt="arrows" />
                </div>
                <Typography variant="h1" component="h1" marginBottom="mb-24">
                  Try It, Rent It, <span style={{ color: '#446381' }}>Save $50!</span>
                </Typography>

                <Typography variant="subtitle1" component="p" marginBottom="mb-24">
                  It is a long established fact that a reader will be distracted by the readable content of a page when
                  looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                  distribution of letters as opposed.
                </Typography>

                <Button component="button" variant="GetStarted" classNameStyles="button">
                  Get Started Now
                </Button>
              </div>
              <div className={styles.inner_images}>
                <div className={styles.images_img}>
                  <img src="/intro/gamer.png" alt="gamer" />
                </div>
                <img className={styles.images_box1} src="/intro/box1.png" alt="box" />
                <img className={styles.images_dots} src="/intro/dots.png" alt="dots" />
                <img className={styles.images_box2} src="/intro/box2.png" alt="box" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
