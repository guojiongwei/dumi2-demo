import React, { memo } from "react";
import { Button, ButtonProps } from "antd";

type IPrimaryButtonProps = Omit<ButtonProps, 'type'>

const PrimaryButton: React.FC<IPrimaryButtonProps> = (props) => {

  const { children, ...rest } = props

  return (
    <Button {...rest} type='primary'>
      {children}
    </Button>
  );
};

export default memo(PrimaryButton);

