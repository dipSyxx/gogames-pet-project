/* eslint-disable react/display-name */
import clsx from 'clsx'
import { createElement, FC, forwardRef, ReactNode, useContext } from 'react'

import styles from './Button.module.sass'
import { motion } from 'framer-motion'

type ButtonProps = {
  children: ReactNode
  component: 'button' | 'a'
  variant: 'GetStarted' | 'SelectThis'
  classNameStyles: string
  href?: string
  onClick?: (e: React.MouseEvent) => void
  type?: 'submit' | 'button'
  disabled?: boolean
}

export const Button: FC<ButtonProps> = forwardRef(
  ({ children, component, variant = 'GetStarted', classNameStyles, href, type = 'button', disabled, onClick }, ref) => {
    return createElement(
      component,
      {
        ref,
        onClick,
        href,
        type,
        disabled,
        className: clsx(styles.button, styles[classNameStyles], styles[variant]),
      },
      children,
    )
  },
)

export const MButton = motion(Button)
