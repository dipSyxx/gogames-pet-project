import React from 'react'
import styles from './FooterStyles.module.sass'
import { Link } from 'react-scroll'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Link to="home" spy={true} smooth={true} offset={50} duration={600} className={styles.footer_logos}>
          <img src="/logo/logoHead.png" alt="logoHead" />
          <img className={styles.logoText} src="/logo/logoText.png" alt="logoHead" />
        </Link>
        <div className={styles.footer_text}>Copyright © 2022 HEALAS.LT. All Rights Reserved.</div>
        <ul className={styles.footer_socials}>
          <a className={styles.socials_item} href="/" target="_blank">
            <li>
              <i className="fa-brands fa-facebook-f" />
            </li>
          </a>
          <a className={styles.socials_item} href="/" target="_blank">
            <li>
              <i className="fa-brands fa-twitter" />
            </li>
          </a>

          <a className={styles.socials_item} href="/" target="_blank">
            <li>
              <i className="fa-brands fa-instagram" />
            </li>
          </a>
        </ul>
      </div>
    </footer>
  )
}
