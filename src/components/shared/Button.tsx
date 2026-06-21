import React from 'react';

type Variant = 'primary' | 'outline' | 'white' | 'whatsapp' | 'ghost';
type Size    = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  as?: 'button' | 'a';
  href?: string;
  target?: string;
  rel?: string;
  fullWidth?: boolean;
}

const variantClasses: Record<Variant, string> = {
  primary:  'bg-[#5B4FCF] text-white border-2 border-[#5B4FCF] hover:bg-[#4a3fb8] hover:border-[#4a3fb8]',
  outline:  'bg-transparent text-[#5B4FCF] border-2 border-[#5B4FCF] hover:bg-[#5B4FCF] hover:text-white',
  white:    'bg-white text-[#5B4FCF] border-2 border-white hover:bg-gray-100',
  whatsapp: 'bg-[#25D366] text-white border-2 border-[#25D366] hover:bg-[#1ebe57]',
  ghost:    'bg-transparent text-[#5B4FCF] border-2 border-transparent hover:bg-[#EFEFFB]',
};

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-2.5 text-sm',
  lg: 'px-8 py-3.5 text-base',
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  leftIcon,
  rightIcon,
  as = 'button',
  href,
  target,
  rel,
  fullWidth = false,
  children,
  className = '',
  ...rest
}) => {
  const base =
    'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-[#5B4FCF] focus:ring-offset-2';
  const classes = [
    base,
    variantClasses[variant],
    sizeClasses[size],
    fullWidth ? 'w-full' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (as === 'a') {
    return (
      <a href={href} target={target} rel={rel} className={classes}>
        {leftIcon && <span className="shrink-0">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="shrink-0">{rightIcon}</span>}
      </a>
    );
  }

  return (
    <button className={classes} {...rest}>
      {leftIcon && <span className="shrink-0">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="shrink-0">{rightIcon}</span>}
    </button>
  );
};

export default Button;
