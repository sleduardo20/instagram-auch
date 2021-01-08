import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import bg from '../../assets/img/bg.png';
import logo from '../../assets/img/logo.png';
import logoFacebook from '../../assets/img/facebook.png';
import googleStore from '../../assets/img/googlestore.png';
import appleStore from '../../assets/img/applestore.png';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { useAuth, User } from '../../hooks/useAuth';

import * as S from './styles';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async (data: User) => {
      await signIn({
        name: data.name,
        password: data.password,
      });
    },
    [signIn],
  );
  return (
    <S.Container>
      <S.Main>
        <S.TopLeft>
          <img src={bg} alt="smarthphones show instagram" />
        </S.TopLeft>
        <S.TopRigth>
          <S.Login>
            <img src={logo} alt="instagram logo" />

            <Form ref={formRef} onSubmit={handleSubmit}>
              <Input
                name="name"
                type="text"
                placeholder="Telefone, nome de usuário ou email"
              />
              <Input name="password" placeholder="Senha" />

              <Button title="Entrar" type="submit" />
            </Form>
            <S.Divider>
              <span>OU</span>
            </S.Divider>

            <strong>
              <img src={logoFacebook} alt="Facebook" /> Entrar com o Facebook
            </strong>
            <a href="https://#">Esqueceu a senha?</a>
          </S.Login>

          <S.Register>
            <p>
              Não tem uma conta? <a href="https://#">Cadastre-se</a>
            </p>
          </S.Register>

          <S.Apps>
            <span>Obtenha o aplicativo</span>
            <S.GroupButtonApps>
              <S.Button image={appleStore} />
              <S.Button image={googleStore} />
            </S.GroupButtonApps>
          </S.Apps>
        </S.TopRigth>
      </S.Main>
    </S.Container>
  );
};

export default SignIn;
