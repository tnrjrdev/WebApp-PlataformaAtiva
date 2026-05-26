import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-400 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-brand-800 text-white hover:bg-brand-700 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lift)] active:scale-[0.98]",
        accent:
          "bg-accent text-white hover:bg-brand-500 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lift)] active:scale-[0.98]",
        outline:
          "border border-border bg-white text-foreground hover:border-brand-400 hover:text-brand-800",
        ghost: "text-foreground hover:bg-subtle",
        whatsapp:
          "bg-[#25D366] text-white hover:bg-[#1ebd5b] shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lift)] active:scale-[0.98]",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-sm",
        lg: "h-13 px-8 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
