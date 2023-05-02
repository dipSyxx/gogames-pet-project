import React from 'react'
import styles from './introStyles.module.sass'
import { MTypography, Typography } from '../Typography'
import { Button, MButton } from '../Button'
import { MouseParallaxChild, MouseParallaxContainer } from 'react-parallax-mouse'
import { motion } from 'framer-motion'
import { opacityAnimations, textAnimations, textAnimationsRight } from '@/Animations'

export const Intro = () => {
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
          viewport={{ once: true }}
          className={styles.block_intro}
          id="home"
        >
          <div className={styles.intro}>
            <motion.img
              variants={opacityAnimations}
              custom={3}
              className={styles.images_X1}
              src="/intro/X1.png"
              alt="X1"
            />
            <div className={styles.container}>
              <div className={styles.intro_inner}>
                <div className={styles.inner_content}>
                  <MouseParallaxChild className={styles.X2} factorX={0.08} factorY={0.08}>
                    <motion.img
                      variants={opacityAnimations}
                      custom={3}
                      className={styles.images_X2}
                      src="/intro/X2.png"
                      alt="X2"
                    />
                  </MouseParallaxChild>
                  <div className={styles.content_topTitle}>
                    <MTypography variants={textAnimations} custom={3} variant="h2" component="h2">
                      Gaming Consoles
                    </MTypography>

                    <motion.img variants={textAnimations} custom={3.4} src="/intro/arrows.png" alt="arrows" />
                    <motion.img variants={textAnimations} custom={3.8} src="/intro/arrows.png" alt="arrows" />
                  </div>
                  <MTypography variants={textAnimations} custom={4} variant="h1" component="h1" marginBottom="mb-24">
                    Try It, Rent It, <span style={{ color: '#446381' }}>Save $50!</span>
                  </MTypography>

                  <MTypography
                    variants={textAnimations}
                    custom={4.4}
                    variant="subtitle1"
                    component="p"
                    marginBottom="mb-24"
                  >
                    It is a long established fact that a reader will be distracted by the readable content of a page
                    when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                    distribution of letters as opposed.
                  </MTypography>

                  <MButton
                    variants={textAnimations}
                    custom={4.8}
                    component="button"
                    variant="GetStarted"
                    classNameStyles="button"
                  >
                    Get Started Now
                  </MButton>
                </div>
                <div className={styles.inner_images}>
                  <div className={styles.images_img}>
                    <MouseParallaxChild factorX={0.1} factorY={0.1}>
                      <motion.img variants={textAnimationsRight} custom={3} src="/intro/gamer.png" alt="gamer" />
                    </MouseParallaxChild>
                  </div>
                  <MouseParallaxChild className={styles.box1} factorX={0.4} factorY={0.4}>
                    <motion.img
                      variants={textAnimationsRight}
                      custom={3.3}
                      className={styles.images_box1}
                      src="/intro/box1.png"
                      alt="box"
                    />
                  </MouseParallaxChild>
                  <MouseParallaxChild className={styles.dots} factorX={0.2} factorY={0.2}>
                    <motion.img
                      variants={opacityAnimations}
                      custom={3.6}
                      className={styles.images_dots}
                      src="/intro/dots.png"
                      alt="dots"
                    />
                  </MouseParallaxChild>
                  <MouseParallaxChild factorX={0.4} factorY={0.4}>
                    <motion.img
                      variants={textAnimationsRight}
                      custom={3.9}
                      className={styles.images_box2}
                      src="/intro/box2.png"
                      alt="box"
                    />
                  </MouseParallaxChild>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </MouseParallaxContainer>
    </>
  )
}
