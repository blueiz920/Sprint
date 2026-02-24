// src/components/Card/index.tsx

import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { cva } from "class-variance-authority";

const cardVariants = cva("overflow-hidden transition-all max-w-md", {
  variants: {
    variant: {
      default: "bg-white border border-gray-200",
      outlined:
        "bg-white border border-gray-500 hover:border-gray-400 transition-colors",
      elevated: "bg-white shadow-lg hover:shadow-xl transition-shadow",
    },
    padding: {
      none: "p-0",
      sm: "p-3",
      md: "p-5",
      lg: "p-8",
    },
    radius: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      full: "rounded-full",
    },
  },
});

type CardProps = {
  children: React.ReactNode;
  variant?: "default" | "outlined" | "elevated";
  padding?: "none" | "sm" | "md" | "lg";
  radius?: "none" | "sm" | "md" | "lg" | "full";
  className?: string;
};

const Card = ({
  children,
  variant = "default",
  padding = "md",
  radius = "md",
  className,
}: CardProps) => {
  return (
    <div
      className={twMerge(
        clsx(cardVariants({ variant, padding, radius }), className),
      )}
    >
      {children}
    </div>
  );
};

export default Card;
