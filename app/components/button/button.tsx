"use client";

import type React from "react";
import { Loader2 } from "lucide-react";

interface SteelButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  isLoading?: boolean;
  variant?: "default" | "small";
  children: React.ReactNode;
}

export function SteelButton({
  icon,
  isLoading = false,
  variant = "default",
  className = "",
  children,
  disabled,
  ...props
}: SteelButtonProps) {
  const baseStyles =
    "relative flex items-center justify-center font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2";

  const steelStyles =
    "border border-gray-400 bg-gradient-to-b from-gray-300 via-gray-200 to-gray-300 text-gray-800 shadow-md hover:from-gray-200 hover:to-gray-400 active:translate-y-0.5 active:shadow-sm";

  const sizeStyles =
    variant === "small" ? "h-9 px-3 text-sm" : "h-10 px-4 text-base";

  const disabledStyles =
    disabled || isLoading
      ? "opacity-70 cursor-not-allowed hover:from-gray-300 hover:via-gray-200 hover:to-gray-300 active:translate-y-0 active:shadow-md"
      : "";

  return (
    <button
      className={`${baseStyles} ${steelStyles} ${sizeStyles} ${disabledStyles} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {/* Highlight overlay */}
      <span className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/20 rounded-md" />

      {/* Content */}
      <span className="flex items-center justify-center z-10">
        {isLoading ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : icon ? (
          <span className="mr-2">{icon}</span>
        ) : null}
        {children}
      </span>
    </button>
  );
}
