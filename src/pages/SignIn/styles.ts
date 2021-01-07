import styled from 'styled-components';

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
  max-width: 35rem;
  margin-top: 3.2rem;
  padding: 3.2rem 2.8rem 1.2rem 2.8rem;
  height: 100%;
  background-color: #fafafa;
  border-radius: 0.4rem;
  border: 1px solid #b7b7b7;

  img {
    width: 17.5rem;
    margin-bottom: 4.8rem;
  }
`;

export const Login = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    width: 100%;

    div {
      margin-bottom: 0.8rem;
    }
  }
`;

export const Register = styled.div``;

export const Apps = styled.div``;

export const GroupButtonApps = styled.div``;

export const Button = styled.div``;
