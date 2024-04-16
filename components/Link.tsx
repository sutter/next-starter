"use client"

import { tv } from "tailwind-variants"
import { UrlObject } from "url"
import NextLink, { LinkProps as NextLinkProps } from "next/link"
import { Link as RaLink } from "react-aria-components"
import { usePathname } from "next/navigation"

import { cn } from "@lib/utils"
import { PropsWithChildren } from "react"

const linkStyles = tv({
  base: "ra-focus-ring transition data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50",
  variants: {
    color: {
      naked: undefined,
      primary: "text-primary-500 hover:text-primary-800 focus:text-primary-800",
    },
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    },
  },
  defaultVariants: {
    color: undefined,
    size: "md",
  },
})

export interface LinkProps extends NextLinkProps {
  /**
   * Additional classes to apply to the link
   */
  className?: string
  /**
   * Whether the link is disabled
   */
  isDisabled?: boolean
  /**
   * The color of the link
   */
  color?: "naked" | "primary"
  /**
   * The size of the link
   */
  size?: "xs" | "sm" | "md" | "lg"
}

const Link = ({
  size,
  color,
  href,
  className,
  children,
  ...rest
}: PropsWithChildren<LinkProps>) => {
  const pathname = usePathname()
  const isActive = (path: string | UrlObject) =>
    path === pathname || `${path}/` === pathname || `${pathname}/` === path

  return (
    <NextLink href={href} passHref legacyBehavior {...rest}>
      <RaLink
        isDisabled={rest.isDisabled}
        aria-current={isActive(href) && "page"}
        className={cn(linkStyles({ color, size }), className)}
      >
        {children}
      </RaLink>
    </NextLink>
  )
}

export default Link
