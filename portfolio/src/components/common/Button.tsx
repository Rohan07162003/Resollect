import React from 'react';
import MuiButton, { ButtonProps as MuiButtonProps } from '@mui/material/Button';

interface ButtonProps extends MuiButtonProps {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label, ...rest }) => {
  return <MuiButton {...rest}>{label}</MuiButton>;
};

export default Button;
