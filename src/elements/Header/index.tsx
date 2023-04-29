import React, { useContext, useState } from 'react'
import styles from './HeaderStyles.module.sass'
import { HeaderActions } from '../HeaderActions'
import { Link } from 'react-scroll'
import clsx from 'clsx'
import { HeaderLinks, HeaderLinksProps } from '@/data/HeaderLinks'
import { BurgerMenu } from '@/modules/BurgerMenu/BurgerMenu'

export const Header = () => {
  const [scroll, setScroll] = useState(0)
  const [active, setActive] = useState(false)
  const [openBurgerMenu, setOpenBurgerMenu] = useState(false)

  const handleScroll = () => {
    setScroll(window.scrollY)
  }

  const handleBurgerActive = () => {
    setActive(true)
    setOpenBurgerMenu(true)
  }

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <BurgerMenu
        openBurgerMenu={openBurgerMenu}
        setOpenBurgerMenu={setOpenBurgerMenu}
        active={active}
        setActive={setActive}
      />
      <header className={clsx(styles.header, scroll < 50 ? '' : styles.headerBg)}>
        <div className={clsx(styles.container)}>
          <Link to="home" spy={true} smooth={true} offset={50} duration={600} className={styles.header_logos}>
            <img src="/logo/logoHead.png" alt="logoHead" />
            <img className={styles.logoText} src="/logo/logoText.png" alt="logoHead" />
          </Link>
          <nav className={styles.nav_menu}>
            <ul className={styles.menu_links}>
              {HeaderLinks.map(({ id, name, href }: HeaderLinksProps) => (
                <li key={id} className={clsx(styles.link_item)}>
                  <Link activeClass={styles.activeLink} to={href} spy={true} smooth={true} offset={-90} duration={600}>
                    {name}
                  </Link>
                </li>
              ))}
              <HeaderActions />
              <button
                onClick={handleBurgerActive}
                className={clsx(styles.nav_menu_burger, active ? styles.nav_menu_burger_active : '')}
                type="button"
              >
                <span></span>
              </button>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}
