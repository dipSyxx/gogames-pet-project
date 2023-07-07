import React, { useState } from 'react'
import styles from './plansStyles.module.sass'
import { MTypography, Typography } from '../Typography'
import { PlansData } from '@/data/PlansData'
import { MPlanCard, PlanCard } from '@/features/PlanCard'
import { motion } from 'framer-motion'
import { textAnimations, textAnimationsBottom } from '@/Animations'

export const Plans = () => {
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null)

  const handleActivateCard = (indexCard: number) => {
    setActiveCardIndex(indexCard)
  }

  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className={styles.plans}
        id="prices"
      >
        <div className={styles.container}>
          <div className={styles.plans_topTitle}>
            <MTypography variants={textAnimationsBottom} custom={1} variant="h2" component="h2" marginBottom="mb-24">
              Our Pricing
            </MTypography>
            <MTypography variants={textAnimationsBottom} custom={1.5} variant="h1" component="h1">
              Choose Your Plan
            </MTypography>
          </div>
          <div className={styles.cards_inner}>
            {PlansData.map(({ ...plans }, indexCard) => (
              <MPlanCard
                index={plans.index}
                key={plans.id}
                title={plans.title}
                cost={plans.cost}
                services={plans.services}
                id={plans.id}
                isActive={activeCardIndex === indexCard}
                onActivate={() => handleActivateCard(indexCard)}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </>
  )
}
