import React, { ButtonHTMLAttributes } from 'react';

import * as S from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
}

const Button: React.FC<ButtonProps> = ({ children, title, ...rest }) => {
  return (
    <S.Container>
      <button type="button" {...rest}>
        {children}
        <span>{title}</span>
      </button>
    </S.Container>
  );
};

export default Button;
