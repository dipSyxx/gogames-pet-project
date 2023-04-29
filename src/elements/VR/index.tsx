import React from 'react'
import styles from './VRstyles.module.sass'
import { Button } from '../Button'
import { Typography } from '../Typography'

export const VR = () => {
  return (
    <>
      <div className={styles.VR_block} id="about">
        <img className={styles.block_imgVRboy} src="/VR/VRboy.png" alt="VRboy" />
        <img className={styles.block_imgVRVR} src="/VR/VRVR.png" alt="VRVR" />
        <div className={styles.container}>
          <div className={styles.intro_inner}>
            <div className={styles.inner_images}>
              <div className={styles.images_img}>
                <img src="/VR/VR.png" alt="VR" />
              </div>
            </div>
            <div className={styles.inner_content}>
              <div className={styles.content_topTitle}>
                <Typography variant="h2" component="h2">
                  About VR Glasses
                </Typography>
              </div>
              <Typography variant="h1" component="h1" marginBottom="mb-24">
                The New VR Glasses Series
              </Typography>

              <div className={styles.content_subtitle}>
                <Typography variant="subtitle1" component="p" marginBottom="mb-24">
                  It is a long established fact that a reader will be distracted by the readable content of a page when
                  looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                  distribution of letters as opposed.
                </Typography>
                <img className={styles.subtitle_img} src="/VR/arrowsLeft.png" alt="arrows" />
              </div>

              <Button component="button" variant="GetStarted" classNameStyles="button">
                Get Started Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
