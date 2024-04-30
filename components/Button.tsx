"use client";

import { PropsWithChildren, ReactNode } from "react";
import { tv } from "tailwind-variants";
import { composeRenderProps, Button as RaButton, ButtonProps as RaButtonProps } from "react-aria-components";

import { focusRingStyles } from "../lib/utils";
import Link from "./Link";
import { ButtonSize } from "./types";

const styles = tv({
  extend: focusRingStyles,
  base: "inline-flex gap-2 items-center justify-center text-center rounded font-semibold transition",
  variants: {
    color: {
      default: "bg-white ring-1 ring-inset ring-gray-300",
      primary: "bg-primary text-white",
    },
    size: {
      xs: "px-1.5 py-1 text-xs min-h-6 min-w-6",
      sm: "px-2 py-1 text-sm min-h-7 min-w-7",
      md: "px-2.5 py-1.5 text-sm min-h-8 min-w-8",
      lg: "px-3.5 py-2.5 text-sm min-h-10 min-w-10",
    },
    isDisabled: {
      true: "cursor-not-allowed opacity-50",
    },
  },
  defaultVariants: {
    color: "default",
    size: "md",
  },
  compoundVariants: [
    {
      color: "default",
      isHovered: true,
      class: "bg-gray-50",
    },
    {
      color: "primary",
      isHovered: true,
      class: "bg-primary-700",
    },
    {
      color: "default",
      isPressed: true,
      class: "bg-gray-100",
    },
    {
      color: "primary",
      isPressed: true,
      class: "bg-primary-900",
    },
  ],
});

interface ButtonProps extends RaButtonProps {
  /**
   * The color of the button
   */
  color?: "default" | "primary";
  /**
   * The size of the button
   */
  size?: ButtonSize;
  /**
   * The URL to link to
   */
  href?: string;
  /**
   * Content to display on the left side of the button
   */
  leftContent?: ReactNode;
  /**
   * Content to display on the right side of the button
   */
  rightContent?: ReactNode;
  /**
   * Only display the icon
   */
  isIconOnly?: boolean;
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
  const classNames = composeRenderProps(className, (className, renderProps) =>
    styles({
      ...renderProps,
      color: color,
      size: size,
      isDisabled: isDisabled,
      className,
    }),
  );
  const arialLabel = isIconOnly ? (children as string) : undefined;

  const Content = () => (
    <>
      {leftContent}
      {isIconOnly ? null : children}
      {rightContent}
    </>
  );

  return href ? (
    <Link href={href} className={classNames} isDisabled={isDisabled} aria-label={arialLabel}>
      <Content />
    </Link>
  ) : (
    <RaButton className={classNames} isDisabled={isDisabled} aria-label={arialLabel} {...rest}>
      <Content />
    </RaButton>
  );
};

export default Button;
