import clsx from 'clsx'
import React from 'react'

import styles from './BurgerMenuStyle.module.sass'

type BurgerMenuProps = {
  openBurgerMenu: boolean
  setOpenBurgerMenu: (isOpenBurgerMenu: boolean) => void
  active: boolean
  setActive: (isActive: boolean) => void
}

export const BurgerMenu = ({ openBurgerMenu, setOpenBurgerMenu, active, setActive }: BurgerMenuProps) => {
  const handleCloseBurgerMenu = () => {
    setOpenBurgerMenu(false)
    setActive(false)
  }

  return (
    <>
      {/* Задній план ===============*/}
      <div
        className={clsx(styles.burger_holder, openBurgerMenu ? styles.show_burger : '')}
        onClick={handleCloseBurgerMenu}
      ></div>
      {/* Задній план ===============*/}
      {/* Контентна частина ================== */}
      <div className={clsx(styles.burger_window, openBurgerMenu ? styles.burger_window_show : '')}>
        <div className={styles.burger_menu_header}>
          {/* header */}
          <button className={styles.burger_close} onClick={handleCloseBurgerMenu}>
            X
          </button>
        </div>

        <div className={styles.burger_menu_body}></div>
      </div>
      {/* Контентна частина ================== */}
    </>
  )
}
