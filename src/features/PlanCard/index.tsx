/* eslint-disable react/display-name */
import React, { forwardRef, useState } from 'react'
import styles from './PlanCard.module.sass'
import { PlansData, PlansDataProps } from '@/data/PlansData'
import { Button } from '@/elements/Button'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { textAnimations } from '@/Animations'

export const PlanCard = forwardRef(({ isActive, onActivate, ...plans }: PlansDataProps, ref) => {
  const servicesTick = plans.services

  return (
    <motion.div
      variants={textAnimations}
      custom={plans.index}
      className={clsx(styles.card, isActive ? styles.active : '')}
      onClick={onActivate}
      key={plans.id}
    >
      <div className={styles.card_content}>
        <div className={styles.content_title}>
          {plans.title}{' '}
          {isActive ? (
            <div className={styles.selected_check}>
              <span>
                <img src="/Plans/checkSelected.png" alt="check" />
              </span>
            </div>
          ) : (
            ''
          )}
        </div>
        <div className={styles.content_cost}>
          <span className={styles.dollar}>$</span>
          {plans.cost}
          <span>.00</span>
          <span className={styles.perHour}>/Per Hour</span>
        </div>
        <ul className={styles.services_list}>
          {servicesTick.map((value: string, i: number) => (
            <li key={i} className={styles.list_item}>
              {isActive ? (
                <img src="/Plans/checkSelected.png" alt="chekSelected" />
              ) : (
                <img src="/Plans/check.png" alt="check" />
              )}
              {value}
            </li>
          ))}
        </ul>
        <Button component="button" variant="SelectThis" classNameStyles="button">
          {isActive ? 'Selected' : 'Select This Plan'}
        </Button>
      </div>
      {isActive ? <img className={styles.effect} src="/Plans/effect.png" alt="effect" /> : ''}
    </motion.div>
  )
})

export const MPlanCard = motion(PlanCard)
