import React from 'react'
import styles from './VRstyles.module.sass'
import { Button, MButton } from '../Button'
import { MTypography, Typography } from '../Typography'
import { motion } from 'framer-motion'
import { opacityAnimations, textAnimations, textAnimationsRight } from '@/Animations'
import { MouseParallaxChild, MouseParallaxContainer } from 'react-parallax-mouse'

export const VR = () => {
  return (
    <>
      <MouseParallaxContainer
        globalFactorX={0.2}
        globalFactorY={0.2}
        containerStyle={{ overflow: 'unset' }}
        className={styles.parallaxContainer}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className={styles.VR_block}
          id="about"
        >
          <MouseParallaxChild className={styles.VR_boy} factorX={0.06} factorY={0.06}>
            <motion.img
              variants={opacityAnimations}
              custom={1}
              className={styles.block_imgVRboy}
              src="/VR/VRboy.png"
              alt="VRboy"
            />
          </MouseParallaxChild>
          <motion.img
            variants={opacityAnimations}
            custom={2}
            className={styles.block_imgVRVR}
            src="/VR/VRVR.png"
            alt="VRVR"
          />
          <div className={styles.container}>
            <div className={styles.intro_inner}>
              <div className={styles.inner_images}>
                <div className={styles.images_img}>
                  <motion.img variants={textAnimations} custom={1} src="/VR/VR.png" alt="VR" />
                </div>
              </div>
              <div className={styles.inner_content}>
                <div className={styles.content_topTitle}>
                  <MTypography variants={textAnimationsRight} custom={1.3} variant="h2" component="h2">
                    About VR Glasses
                  </MTypography>
                </div>
                <MTypography
                  variants={textAnimationsRight}
                  custom={1.6}
                  variant="h1"
                  component="h1"
                  marginBottom="mb-24"
                >
                  The New VR Glasses Series
                </MTypography>

                <div className={styles.content_subtitle}>
                  <MTypography
                    variants={textAnimationsRight}
                    custom={1.9}
                    variant="subtitle1"
                    component="p"
                    marginBottom="mb-24"
                  >
                    It is a long established fact that a reader will be distracted by the readable content of a page
                    when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                    distribution of letters as opposed.
                  </MTypography>
                  <motion.img
                    variants={textAnimationsRight}
                    custom={2.2}
                    className={styles.subtitle_img}
                    src="/VR/arrowsLeft.png"
                    alt="arrows"
                  />
                </div>

                <MButton
                  variants={textAnimationsRight}
                  custom={2.5}
                  component="button"
                  variant="GetStarted"
                  classNameStyles="button"
                >
                  Get Started Now
                </MButton>
              </div>
            </div>
          </div>
        </motion.div>
      </MouseParallaxContainer>
    </>
  )
}
