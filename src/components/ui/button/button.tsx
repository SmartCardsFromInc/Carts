import {
  ComponentPropsWithoutRef,
  ElementType,
  ForwardedRef,
  forwardRef,
  ReactNode,
} from "react";

import { clsx } from "clsx";

import s from "./button.module.scss";

export type ButtonPropsType<T extends ElementType = "button"> = {
  variant:
    | "primary"
    | "primaryWithIcon"
    | "secondary"
    | "tertiary"
    | "link-btn"
    | "secondaryWithIcon";
  fullWidth?: boolean;
  disabled?: boolean;
  className?: string;
  children: ReactNode;
  as?: T;
} & ComponentPropsWithoutRef<T>;
type PolymorphicRef<T extends React.ElementType> =
  React.ComponentPropsWithRef<T>["ref"];

const ButtonPolymorph = <T extends ElementType = "button">(
  props: ButtonPropsType<T>,
  ref?: PolymorphicRef<T>,
) => {
  const {
    variant = "primary",
    fullWidth,
    disabled,
    className,
    children,
    as: Component = "button",
    ...restProps
  } = props;

  const classNames = {
    btn: clsx(
      s.btn,
      s[variant],
      fullWidth && s.fullWidth,
      disabled && s.disabled,
      className,
    ),
  };

  return (
    <Component
      className={classNames.btn}
      {...restProps}
      disabled={disabled}
      ref={ref}
    >
      {/*<img src={logOut} alt={"logOut"} />*/}
      {children}
    </Component>
  );
};

export const Button = forwardRef(ButtonPolymorph) as <T extends ElementType>(
  props: ButtonPropsType<T> & {
    ref?: ForwardedRef<ElementType>;
  },
) => ReturnType<typeof ButtonPolymorph>;
