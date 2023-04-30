import clsx from 'clsx'
import React from 'react'

import styles from './BurgerMenuStyle.module.sass'
import { HeaderLinks, HeaderLinksProps } from '@/data/HeaderLinks'
import { Link } from 'react-scroll'

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
          <img src="/logo/logoHead.png" alt="logo" />
          <div className={styles.header_text}>Menu</div>
          <button className={styles.burger_close} onClick={handleCloseBurgerMenu}>
            X
          </button>
        </div>

        <div className={styles.burger_menu_body}>
          <ul className={styles.menu_links}>
            {HeaderLinks.map(({ id, name, href }: HeaderLinksProps) => (
              <li key={id} className={clsx(styles.link_item)}>
                <Link
                  onClick={handleCloseBurgerMenu}
                  activeClass={styles.activeLink}
                  to={href}
                  spy={true}
                  smooth={true}
                  offset={-90}
                  duration={600}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Контентна частина ================== */}
    </>
  )
}
