import { render } from '@testing-library/react';
import { ButtonProps } from 'antd';
import React from 'react';
import PrimaryButton from '..';

describe('PrimaryButton', () => {
  const buttonProps: ButtonProps = {
    loading: false,
    onClick: jest.fn(),
  };

  it('renders the children correctly', () => {
    const buttonText = 'Click Me';
    const { getByRole } = render(
      <PrimaryButton {...buttonProps}>{buttonText}</PrimaryButton>,
    );
    const buttonElement = getByRole('button');
    expect(buttonElement.textContent).toBe(buttonText);
  });

  it('renders the correct type prop', () => {
    const { getByRole } = render(
      <PrimaryButton {...buttonProps}>Click Me</PrimaryButton>,
    );
    const buttonElement = getByRole('button');
    expect(buttonElement.classList.contains('ant-btn-primary')).toBe(true);
  });
});
