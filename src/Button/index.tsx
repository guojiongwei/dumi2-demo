import React, { memo } from 'react';

export interface ButtonProps {
  /** 按钮类型 */
  type?: 'primary' | 'default';
  /** 按钮文字 */
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

/** 按钮组件 */
const Button: React.FC<ButtonProps> = (props) => {
  const { type = 'default', children, onClick } = props
  return (
    <button
      type='button'
      className={`button ${type ? 'button-' + type : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default memo(Button);
