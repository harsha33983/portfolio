import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

type ButtonProps = {
  children: ReactNode;
  variant?: "dark" | "light" | "outline";
  withArrow?: boolean;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export function ButtonLink({ children, variant = "dark", withArrow = true, className = "", ...props }: ButtonProps) {
  return (
    <a className={`button button-${variant} ${className}`} {...props}>
      <span>{children}</span>
      {withArrow && <ArrowUpRight aria-hidden="true" size={16} />}
    </a>
  );
}

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "dark" | "light" | "outline";
};

export function Button({ children, variant = "dark", className = "", ...props }: IconButtonProps) {
  return (
    <button className={`button button-${variant} ${className}`} {...props}>
      <span>{children}</span>
      <ArrowUpRight aria-hidden="true" size={16} />
    </button>
  );
}
