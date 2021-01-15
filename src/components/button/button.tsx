//

import classnames from 'classnames'

import React, { forwardRef } from 'react'
import style from './button.module.scss'
import { Loader } from '../loader'

type ButtonPropTypes = {
  size?: 'small' | 'medium' | 'large' | 'auto'
  primary?: boolean
  primarySecond?: boolean
  secondary?: boolean
  alert?: boolean
  link?: boolean
  icon?: boolean
  dashed?: boolean
  className?: string
  tooltip?: React.ReactNode
  withMargin?: boolean
  hidden?: boolean
  isLoading?: boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button: React.FC<ButtonPropTypes> = forwardRef<
  HTMLButtonElement,
  ButtonPropTypes
>(
  (
    {
      primary,
      primarySecond,
      secondary,
      alert,
      disabled,
      link,
      type = 'submit',
      size = 'medium',
      icon,
      dashed,
      className,
      tooltip,
      withMargin = !icon,
      hidden,
      isLoading,
      children,
      ...rest
    },
    ref
  ) => {
    const button = (
      <span
        className={classnames(
          style.button__wrapper,
          disabled && style['button__wrapper--disabled'],
          withMargin && style['button__wrapper--with-margin'],
          hidden && style['button__wrapper--hidden']
        )}
      >
        <button
          {...rest}
          ref={ref}
          type={type}
          disabled={disabled}
          className={classnames(
            style.button,
            {
              [style['button--small']]: size === 'small',
              [style['button--medium']]: size === 'medium',
              [style['button--large']]: size === 'large',
              [style['button--auto']]: size === 'auto',
              [style['button--primary']]: primary,
              [style['button--primary-second']]: primarySecond,
              [style['button--secondary']]: secondary,
              [style['button--alert']]: alert,
              [style['button--link']]: link,
              [style['button--icon']]: icon,
              [style['button--dashed']]: dashed
            },
            className
          )}
        >
          {isLoading && (
            <span className='mr-2'>
              <Loader isSmall />
            </span>
          )}
          {children}
        </button>
      </span>
    )

    return button
  }
)
