import React, { useState } from 'react'
import styles from './PlanCard.module.sass'
import { PlansData, PlansDataProps } from '@/data/PlansData'
import { Button } from '@/elements/Button'
import clsx from 'clsx'

export const PlanCard = ({ id, title, cost, services }: PlansDataProps) => {
  const servicesTick = services

  const [selectedId, setSelectedId] = useState<number | null>(null)

  // Створіть функцію для обробки кліків на картці
  const handleCardClick = (id: number) => {
    if (selectedId === id) {
      // Якщо обрана картка вже була натиснута, заберіть стилі
      setSelectedId(null)
    } else {
      // Якщо обрана нова картка, додайте стилі та деактивуйте попередню картку
      setSelectedId(id)
      if (selectedId !== null) {
        const prevSelectedCard = document.getElementById(`plan-card-${selectedId}`)
        if (prevSelectedCard) {
          prevSelectedCard.classList.remove(styles.active)
        }
      }
    }
  }

  return (
    <div
      className={clsx(styles.card, {
        [styles.active]: selectedId === id,
      })}
      onClick={() => handleCardClick(id)} // Додайте обробник кліків на весь контейнер картки
      id={`plan-card-${id}`} // Додайте ID для контейнера картки
    >
      <div className={styles.card_content}>
        <div className={styles.content_title}>
          {title}{' '}
          {selectedId === id ? (
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
          {cost}
          <span>.00</span>
          <span className={styles.perHour}>/Per Hour</span>
        </div>
        <ul className={styles.services_list}>
          {servicesTick.map((value: string, i: number) => (
            <li key={i} className={styles.list_item}>
              {selectedId === id ? (
                <img src="/Plans/checkSelected.png" alt="chekSelected" />
              ) : (
                <img src="/Plans/check.png" alt="check" />
              )}
              {value}
            </li>
          ))}
        </ul>
        <Button component="button" variant="SelectThis" classNameStyles="button">
          {selectedId === id ? 'Selected' : 'Select This Plan'}
        </Button>
      </div>
      {selectedId === id ? <img className={styles.effect} src="/Plans/effect.png" alt="effect" /> : ''}
    </div>
  )
}
