import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 0.2rem;
  height: 3.8rem;
  border-radius: 0.4rem;
  border: 1px solid rgba(142, 142, 142, 1);
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    width: 100%;
    outline: none;
    padding: 0.4rem;
    font-size: 1.4rem;
    line-height: 1.8rem;

    &::placeholder {
      color: gray;
    }
  }
`;
