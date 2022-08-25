import React from 'react';
import './button.css';
import cn from 'classnames'

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={cn(
        "bg-primary text-red-300 px-2 w-[50px] h-5",
        "after:content-['']",
        "hover:bg-emerald-400 transition duration-150 ease-in-out"
      )}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
