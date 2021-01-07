import styled from 'styled-components';

type ContainerProps = {
  isFocused: boolean;
};

export const Container = styled.div<ContainerProps>`
  width: 100%;
  padding: 0.2rem;
  height: 3.8rem;
  background: #ffff;
  border-radius: 0.4rem;
  border: 1px solid rgba(142, 142, 142, 1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: ${({ isFocused }) =>
    isFocused ? '1px solid #B9B9B9' : '1px solid #EAEAEA'};

  button {
    width: 10rem;
    font-weight: 600;
    cursor: pointer;
    padding: 0.4rem;
    background: none;
    border: none;
  }

  input {
    width: 100%;
    outline: none;
    padding: 0.4rem;
    font-size: 1.2rem;
    line-height: 1.8rem;

    &::placeholder {
      color: #b9b9b9;
      font-size: 1.2rem;
    }
  }
`;
