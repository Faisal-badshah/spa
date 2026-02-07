import { ReactNode } from 'react';

interface CTAButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  ariaLabel?: string;
}

export default function CTAButton({
  children,
  onClick,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  ariaLabel
}: CTAButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200";

  const variantStyles = {
    primary: "bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800",
    secondary: "bg-accent-600 text-white hover:bg-accent-700 active:bg-accent-800",
    ghost: "bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-700"
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={combinedStyles}
        target={href.startsWith('http') ? '_blank' : '_self'}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedStyles} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
