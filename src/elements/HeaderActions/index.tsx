/* eslint-disable react/display-name */
import React, { forwardRef } from 'react'
import { Button, MButton } from '../Button'
import { motion } from 'framer-motion'
import { textAnimationsRight } from '@/Animations'

export const HeaderActions = forwardRef(() => {
  return (
    <>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <MButton
          variants={textAnimationsRight}
          custom={2}
          component="button"
          variant="GetStarted"
          classNameStyles="button"
        >
          Get Started Now
        </MButton>
      </motion.div>
    </>
  )
})
export const MHeaderActions = motion(HeaderActions)
