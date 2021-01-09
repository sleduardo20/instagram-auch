/* eslint-disable @typescript-eslint/no-unused-vars */
import styled, { css } from 'styled-components';

export const Container = styled.div`
  background-color: #f3f3f3;
`;

export const Main = styled.main`
  max-width: 93.5rem;
  margin: 6rem auto 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const TopLeft = styled.div`
  max-width: 45.4rem;

  img {
    width: 100%;
  }
`;

export const TopRigth = styled.div`
  width: 35rem;
`;

const background = css`
  width: 100%;
  height: 100%;
  background-color: #fafafa;
  border-radius: 0.4rem;
  border: 1px solid #b7b7b7;
`;

export const Login = styled.div`
  ${background}
  flex: 1;
  margin-top: 3.2rem;
  padding: 3.2rem 2.8rem 1.6rem 2.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;

  img {
    width: 17.5rem;
    margin-bottom: 4.8rem;
  }

  form {
    width: 100%;

    > div {
      margin-bottom: 0.8rem;
    }
    > div + div {
      margin-bottom: 1.6rem;
    }
  }

  > strong {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #4267b2;

    img {
      width: 2rem;
      height: 2rem;
      margin: 0 0.8rem 0 0;
    }
  }

  > a {
    margin-top: 2rem;
    color: #000000;
  }
`;

export const Divider = styled.div`
  width: 100%;
  text-align: center;
  position: relative;
  margin: 0.8rem 0 2rem 0;
  span {
    color: #b7b7b7;
    font-weight: 600;
  }

  &::after {
    content: '';
    width: 40%;
    height: 0.5px;
    background: #b7b7b7;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }
  &::before {
    content: '';
    width: 40%;
    height: 0.5px;
    background: #b7b7b7;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  }
`;

export const Register = styled.div`
  ${background}
  margin-top: 1.6rem;
  padding: 1.6rem;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;

  p {
    a {
      font-weight: 600;
      color: #0095f6;
    }
  }
`;

export const Apps = styled.div`
  width: 100%;
  margin-top: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const GroupButtonApps = styled.div`
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
`;

type ButtonProps = {
  image?: string;
};
export const Button = styled.a<ButtonProps>`
  width: 13.6rem;
  height: 4rem;
  cursor: pointer;
  background: url(${({ image }) => image}) no-repeat center;
  background-size: cover;
`;
