"use client"

import { PropsWithChildren, ReactNode } from "react"
import { tv } from "tailwind-variants"
import {
  Button as RaButton,
  ButtonProps as RaButtonProps,
} from "react-aria-components"

import { cn } from "@lib/utils"
import Link from "./Link"

const buttonStyles = tv({
  base: "ra-focus-ring inline-flex gap-2 items-center justify-center text-center rounded font-semibold transition data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50",
  variants: {
    color: {
      default:
        "bg-white ring-1 ring-inset ring-gray-300 hover:bg-gray-50 data-[pressed=true]:!bg-gray-100",
      primary:
        "bg-primary text-white hover:bg-primary-700 data-[pressed=true]:!bg-primary-900",
    },
    size: {
      xs: "px-1.5 py-1 text-xs min-h-6 min-w-6",
      sm: "px-2 py-1 text-sm min-h-7 min-w-7",
      md: "px-2.5 py-1.5 text-sm min-h-8 min-w-8",
      lg: "px-3.5 py-2.5 text-sm min-h-10 min-w-10",
    },
  },
  defaultVariants: {
    color: "default",
    size: "md",
  },
})

interface ButtonProps extends RaButtonProps {
  /**
   * The color of the button
   */
  color?: "default" | "primary"
  /**
   * The size of the button
   */
  size?: "xs" | "sm" | "md" | "lg"
  /**
   * The URL to link to
   */
  href?: string
  /**
   * Content to display on the left side of the button
   */
  leftContent?: ReactNode
  /**
   * Content to display on the right side of the button
   */
  rightContent?: ReactNode
  /**
   * Only display the icon
   */
  isIconOnly?: boolean
}

const Button = ({
  className,
  children,
  color,
  size,
  href,
  isDisabled,
  leftContent,
  rightContent,
  isIconOnly,
  ...rest
}: PropsWithChildren<ButtonProps>) => {
  const classNames = cn(buttonStyles({ color, size }), className)
  const arialLabel = isIconOnly ? (children as string) : undefined

  const Content = () => (
    <>
      {leftContent}
      {isIconOnly ? null : children}
      {rightContent}
    </>
  )

  return href ? (
    <Link
      href={href}
      className={classNames}
      isDisabled={isDisabled}
      aria-label={arialLabel}
    >
      <Content />
    </Link>
  ) : (
    <RaButton
      className={classNames}
      isDisabled={isDisabled}
      aria-label={arialLabel}
      {...rest}
    >
      <Content />
    </RaButton>
  )
}

export default Button
