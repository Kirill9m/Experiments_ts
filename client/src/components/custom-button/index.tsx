import React from 'react';
import styles from './index.module.css';

interface CustomButtonProps {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  className?: string;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  type = 'button',
  variant = 'primary',
  disabled = false,
  loading = false,
  onClick,
  className,
}) => {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={`${styles.button} ${styles[variant]} ${className || ''} ${disabled ? styles.disabled : ''}`}
    >
      {loading ? (
        <span className={styles.loader}></span>
      ) : children}
    </button>
  );
};