import React from 'react'
import styles from './NewXboxStyles.module.sass'
import { Button, MButton } from '../Button'
import { MTypography, Typography } from '../Typography'
import { motion } from 'framer-motion'
import { textAnimationsReverseLeft, textAnimationsReverseRight } from '@/Animations'

export const NewXbox = () => {
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className={styles.NewXbox_block}
        id="rules"
      >
        <div className={styles.intro}>
          <div className={styles.container}>
            <div className={styles.intro_inner}>
              <div className={styles.inner_content}>
                <div className={styles.content_topTitle}>
                  <MTypography variants={textAnimationsReverseLeft} custom={1} variant="h2" component="h2">
                    About XBOX, PS
                  </MTypography>
                </div>
                <MTypography
                  variants={textAnimationsReverseLeft}
                  custom={1.3}
                  variant="h1"
                  component="h1"
                  marginBottom="mb-24"
                >
                  The New Xbox, Ps Series
                </MTypography>

                <div className={styles.content_subtitle}>
                  <MTypography
                    variants={textAnimationsReverseLeft}
                    custom={1.6}
                    variant="subtitle1"
                    component="p"
                    marginBottom="mb-24"
                  >
                    It is a long established fact that a reader will be distracted by the readable content of a page
                    when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                    distribution of letters as opposed.
                  </MTypography>
                  <motion.img
                    variants={textAnimationsReverseLeft}
                    custom={1.9}
                    className={styles.subtitle_img}
                    src="/VR/arrowsLeft.png"
                    alt="arrows"
                  />
                </div>

                <MButton
                  variants={textAnimationsReverseLeft}
                  custom={2.2}
                  component="button"
                  variant="GetStarted"
                  classNameStyles="button"
                >
                  Get Started Now
                </MButton>
              </div>

              <div className={styles.inner_images}>
                <div className={styles.images_img}>
                  <motion.img
                    variants={textAnimationsReverseRight}
                    custom={1}
                    src="/newXbox/joystick.png"
                    alt="joystick"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}
