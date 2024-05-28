"use client";

import { PropsWithChildren, ReactNode } from "react";
import { tv } from "tailwind-variants";
import { UrlObject } from "url";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { composeRenderProps, Link as RaLink, LinkProps as RaLinkProps } from "react-aria-components";
import { usePathname } from "next/navigation";

import { focusRingStyles } from "../lib/utils";

const styles = tv({
  extend: focusRingStyles,
  base: "transition",
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
    isDisabled: {
      true: "cursor-not-allowed opacity-50",
    },
  },
  defaultVariants: {
    color: undefined,
    size: "md",
  },
});

export interface LinkProps extends NextLinkProps {
  /**
   * Add a custom class name
   */
  className?: RaLinkProps["className"];
  /**
   * Whether the link is disabled
   */
  isDisabled?: boolean;
  /**
   * The color of the link
   */
  color?: "naked" | "primary";
  /**
   * The size of the link
   */
  size?: "xs" | "sm" | "md" | "lg";
  /**
   * The content to display before the link
   */
  startContent?: ReactNode;
  /**
   * The content to display after the link
   */
  endContent?: ReactNode;
}

const Link = ({
  size,
  color,
  href,
  className,
  children,
  startContent,
  endContent,
  ...rest
}: PropsWithChildren<LinkProps>) => {
  const pathname = usePathname();
  const isActive = (path: string | UrlObject) =>
    path === pathname || `${path}/` === pathname || `${pathname}/` === path;

  return (
    <NextLink href={href} passHref legacyBehavior {...rest}>
      <RaLink
        isDisabled={rest.isDisabled}
        aria-current={isActive(href) && "page"}
        className={composeRenderProps(className, (className, renderProps) =>
          styles({ ...renderProps, className, color: color, size: size }),
        )}
      >
        {startContent}
        {children}
        {endContent}
      </RaLink>
    </NextLink>
  );
};

export default Link;
