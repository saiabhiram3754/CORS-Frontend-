import React from "react";
import clsx from "clsx"; 

export function Button({ children, variant = "default", asChild = false, className = "", ...props }) {
  const Component = asChild ? "span" : "button";

  const baseStyles = "px-4 py-2 rounded-lg font-semibold transition-all";
  const variantStyles = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-50"
  };

  return (
    <Component
      className={clsx(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Component>
  );
}
