import React from 'react'
import styles from './plansStyles.module.sass'
import { Typography } from '../Typography'
import { PlansData } from '@/data/PlansData'
import { PlanCard } from '@/features/PlanCard'

export const Plans = () => {
  return (
    <>
      <div className={styles.plans} id="prices">
        <div className={styles.container}>
          <div className={styles.plans_topTitle}>
            <Typography variant="h2" component="h2" marginBottom="mb-24">
              Our Pricing
            </Typography>
            <Typography variant="h1" component="h1">
              Choose Your Plan
            </Typography>
          </div>
          <div className={styles.cards_inner}>
            {PlansData.map(({ id, title, cost, services }) => (
              <PlanCard key={id} title={title} cost={cost} services={services} id={id} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
