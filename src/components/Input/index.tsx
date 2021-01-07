import React, {
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import { useField } from '@unform/core';

import * as S from './styles';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({ name, type = 'text', ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showMe, setShowMe] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [registerField, fieldName]);

  const handelOnFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  const handleShowPassword = useCallback(() => {
    setShowMe(state => !state);
  }, []);

  return (
    <S.Container isFocused={isFocused}>
      <input
        ref={inputRef}
        name={name}
        onFocus={handelOnFocus}
        onBlur={handleBlur}
        {...rest}
      />
      {name === 'password' && (
        <button onClick={handleShowPassword} type="button">
          {showMe ? 'Ocultar' : 'Mostrar'}
        </button>
      )}
    </S.Container>
  );
};

export default Input;
