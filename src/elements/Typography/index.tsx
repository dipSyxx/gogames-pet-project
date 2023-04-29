/* eslint-disable react/display-name */
import { forwardRef } from 'react'
import clsx from 'clsx'
import { createElement, ElementType, FC, ReactNode } from 'react'
import { motion } from 'framer-motion'

import styles from './typographyStyles.module.sass'

type TypographyProps = {
  children: ReactNode
  component?: ElementType
  variant?: 'h1' | 'h2' | 'subtitle1'
  marginBottom?: 'mb-36' | 'mb-24' | 'mb-16' | 'mb-12' | 'mb-8' | 'mb-4'
}

export const Typography: FC<TypographyProps> = forwardRef(
  ({ children, component = 'h1', variant = 'h1', marginBottom = '' }, ref) => {
    return createElement(
      component,
      {
        ref,
        className: clsx(styles.typography, styles[variant], styles[marginBottom]),
      },
      children,
    )
  },
)

export const MTypography = motion(Typography)
