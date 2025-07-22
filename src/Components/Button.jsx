import React from 'react';
import Styles from '../Styles/Button.module.css';

const Button = ({ children, onClick, type = 'button', className = '', as = 'button', ...props }) => {
  const classes = `${Styles.button} ${className}`.trim();

  if (as === 'a') {
    return (
      <a className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export { Button };
